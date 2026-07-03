"use client";

/**
 * RegionCombobox
 *
 * Searchable/autocomplete input untuk memilih Kabupaten/Kota dari
 * `INDONESIA_REGIONS` (lib/regions.ts). Dibuat sebagai komponen reusable
 * di /components (bukan ditaruh di halaman Register) supaya bisa dipakai
 * ulang di Edit Profile, filter Leaderboard, dsb — sesuai tujuan file data
 * yang reusable.
 *
 * Perilaku:
 * - Mengetik memfilter daftar secara instan (client-side, dataset kecil ~500 baris).
 * - Wajib memilih dari daftar — mengetik teks bebas tanpa memilih akan
 *   dianggap belum valid (sesuai requirement "wajib dipilih dari dropdown").
 * - Full keyboard support: Arrow Up/Down untuk navigasi, Enter untuk memilih,
 *   Escape untuk menutup dan mengembalikan ke pilihan terakhir yang valid.
 * - Accessible: role="combobox", aria-expanded, aria-activedescendant, listbox.
 *
 * Styling memakai token & class yang sudah ada di globals.css
 * (.input-field, .glass-bright, var(--*)) — tidak menambah warna baru.
 */

import { useEffect, useId, useMemo, useRef, useState } from "react";
import { MapPin, ChevronDown } from "lucide-react";
import { INDONESIA_REGIONS, type IndonesiaRegion } from "@/lib/regions";

interface RegionComboboxProps {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  onBlurValidate?: () => void;
  error?: string;
  placeholder?: string;
  required?: boolean;
}

const MAX_VISIBLE_RESULTS = 8;

export default function RegionCombobox({
  id,
  label,
  value,
  onChange,
  onBlurValidate,
  error,
  placeholder = "Ketik nama kota/kabupaten...",
  required,
}: RegionComboboxProps) {
  const [query, setQuery] = useState(value);
  const [isOpen, setIsOpen] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const listboxId = useId();

  // Note: no effect syncing `query` from `value` on external reset — this
  // component always unmounts with the rest of the form after a successful
  // submit (see RegisterPage), so there's nothing external to sync with.
  // If reused somewhere that resets `value` while staying mounted (e.g. a
  // "clear filters" button), pass a `key` prop to force a remount instead.

  const results = useMemo<IndonesiaRegion[]>(() => {
    const q = query.trim().toLowerCase();
    if (!q) return INDONESIA_REGIONS.slice(0, MAX_VISIBLE_RESULTS);
    const terms = q.split(/\s+/).filter(Boolean);
    const matches = INDONESIA_REGIONS.filter((r) => {
      const haystack = r.label.toLowerCase();
      return terms.every((t) => haystack.includes(t));
    });
    return matches.slice(0, MAX_VISIBLE_RESULTS);
  }, [query]);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
        // Enforce "must pick from list": revert stray free-text input
        if (query !== value) {
          setQuery(value);
        }
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [query, value]);

  function selectRegion(region: IndonesiaRegion) {
    onChange(region.value);
    setQuery(region.label);
    setIsOpen(false);
    inputRef.current?.blur();
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (!isOpen && (e.key === "ArrowDown" || e.key === "Enter")) {
      setIsOpen(true);
      setHighlightedIndex(0);
      return;
    }
    if (!isOpen) return;

    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        setHighlightedIndex((i) => Math.min(i + 1, results.length - 1));
        break;
      case "ArrowUp":
        e.preventDefault();
        setHighlightedIndex((i) => Math.max(i - 1, 0));
        break;
      case "Enter":
        e.preventDefault();
        if (results[highlightedIndex]) selectRegion(results[highlightedIndex]);
        break;
      case "Escape":
        setIsOpen(false);
        setQuery(value);
        break;
      case "Tab":
        setIsOpen(false);
        break;
    }
  }

  const activeOptionId =
    isOpen && results[highlightedIndex] ? `${listboxId}-opt-${results[highlightedIndex].id}` : undefined;

  return (
    <div ref={containerRef} style={{ position: "relative" }}>
      <label
        htmlFor={id}
        style={{
          display: "block",
          fontSize: 13,
          fontWeight: 600,
          color: "var(--text-secondary)",
          marginBottom: 8,
        }}
      >
        <MapPin size={12} style={{ display: "inline", marginRight: 4, verticalAlign: -1 }} />
        {label}
      </label>

      <div style={{ position: "relative" }}>
        <input
          ref={inputRef}
          id={id}
          type="text"
          role="combobox"
          aria-expanded={isOpen}
          aria-controls={listboxId}
          aria-autocomplete="list"
          aria-activedescendant={activeOptionId}
          aria-required={required}
          aria-invalid={!!error}
          autoComplete="off"
          className="input-field"
          style={{ paddingRight: 36 }}
          placeholder={placeholder}
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setIsOpen(true);
            setHighlightedIndex(0);
            if (value) onChange(""); // typing invalidates previous selection until re-picked
          }}
          onFocus={() => {
            setIsOpen(true);
            setHighlightedIndex(0);
          }}
          onBlur={() => onBlurValidate?.()}
          onKeyDown={handleKeyDown}
        />
        <ChevronDown
          size={16}
          color="var(--text-muted)"
          style={{
            position: "absolute",
            right: 12,
            top: "50%",
            transform: `translateY(-50%) rotate(${isOpen ? 180 : 0}deg)`,
            transition: "transform 0.15s ease",
            pointerEvents: "none",
          }}
        />
      </div>

      {isOpen && (
        <ul
          id={listboxId}
          role="listbox"
          aria-label={label}
          className="glass-bright"
          style={{
            position: "absolute",
            top: "calc(100% + 6px)",
            left: 0,
            right: 0,
            zIndex: 30,
            borderRadius: 12,
            padding: 6,
            maxHeight: 264,
            overflowY: "auto",
            listStyle: "none",
            margin: 0,
          }}
        >
          {results.length === 0 ? (
            <li style={{ padding: "10px 12px", fontSize: 14, color: "var(--text-muted)" }}>
              Kota/kabupaten tidak ditemukan.
            </li>
          ) : (
            results.map((region, index) => {
              const optionId = `${listboxId}-opt-${region.id}`;
              const isHighlighted = index === highlightedIndex;
              const isSelected = region.value === value;
              return (
                <li
                  key={region.id}
                  id={optionId}
                  role="option"
                  aria-selected={isSelected}
                  // onMouseDown (not onClick) so it fires before input's onBlur
                  onMouseDown={(e) => {
                    e.preventDefault();
                    selectRegion(region);
                  }}
                  onMouseEnter={() => setHighlightedIndex(index)}
                  style={{
                    padding: "9px 12px",
                    borderRadius: 8,
                    fontSize: 14,
                    cursor: "pointer",
                    color: isSelected ? "#60A5FA" : "var(--text-primary)",
                    background: isHighlighted ? "rgba(37,99,235,0.15)" : "transparent",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: 8,
                  }}
                >
                  <span>{region.label}</span>
                  <span style={{ fontSize: 11, color: "var(--text-muted)", flexShrink: 0 }}>
                    {region.province}
                  </span>
                </li>
              );
            })
          )}
        </ul>
      )}
    </div>
  );
}
