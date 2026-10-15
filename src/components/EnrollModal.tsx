import { useEffect, useState, type FormEvent } from "react";
import { X, CheckCircle2 } from "lucide-react";
import { Button } from "./ui";

const TRACKS = ["Explorer", "Scholar", "Prime Fellow"];
const LEVELS = ["Undergraduate", "Master’s", "Doctoral", "Other"];

export function EnrollModal({
  open,
  onClose,
  track,
  setTrack,
}: {
  open: boolean;
  onClose: () => void;
  track: string;
  setTrack: (t: string) => void;
}) {
  const [sent, setSent] = useState(false);

  useEffect(() => {
    if (!open) {
      const t = setTimeout(() => setSent(false), 280);
      return () => clearTimeout(t);
    }
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[80] flex items-end justify-center sm:items-center"
      role="dialog"
      aria-modal="true"
      aria-labelledby="enroll-title"
    >
      <button
        className="absolute inset-0 bg-navy/40 backdrop-blur-sm"
        aria-label="Close enrollment dialog"
        onClick={onClose}
      />
      <div className="relative m-0 w-full max-w-lg overflow-hidden rounded-t-3xl border border-line bg-white shadow-2xl sm:m-6 sm:rounded-3xl">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full border border-navy/10 text-navy"
          aria-label="Close"
        >
          <X className="h-4 w-4" />
        </button>

        {sent ? (
          <div className="px-8 py-14 text-center">
            <CheckCircle2 className="mx-auto h-12 w-12 text-gold-deep" />
            <h3 id="enroll-title" className="mt-5 font-display text-3xl text-navy">
              You’re on the list.
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-navy-muted">
              Check your inbox for next steps, studio one, and your place in Cohort 08. Welcome to
              PRIME.
            </p>
            <Button className="mt-8" onClick={onClose}>
              Continue exploring
            </Button>
          </div>
        ) : (
          <form onSubmit={onSubmit} className="p-7 sm:p-8">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-gold-deep">
              Cohort 08
            </p>
            <h3 id="enroll-title" className="mt-2 font-display text-3xl text-navy">
              Enroll in PRIME
            </h3>
            <p className="mt-2 text-sm text-navy-muted">
              Tell us where you are. We’ll send your studio access within minutes.
            </p>

            <div className="mt-6 grid gap-4">
              <div>
                <label className="mb-1.5 block text-xs font-medium text-navy" htmlFor="name">
                  Full name
                </label>
                <input id="name" name="name" required className="field" placeholder="Ada Lovelace" />
              </div>
              <div>
                <label className="mb-1.5 block text-xs font-medium text-navy" htmlFor="email">
                  University email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="field"
                  placeholder="you@university.edu"
                />
              </div>
              <div>
                <label className="mb-1.5 block text-xs font-medium text-navy" htmlFor="uni">
                  Institution
                </label>
                <input id="uni" name="uni" required className="field" placeholder="Your university" />
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1.5 block text-xs font-medium text-navy" htmlFor="level">
                    Level
                  </label>
                  <select id="level" name="level" className="field appearance-none bg-white" defaultValue="Undergraduate">
                    {LEVELS.map((l) => (
                      <option key={l}>{l}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="mb-1.5 block text-xs font-medium text-navy" htmlFor="track">
                    Track
                  </label>
                  <select
                    id="track"
                    name="track"
                    className="field appearance-none bg-white"
                    value={track}
                    onChange={(e) => setTrack(e.target.value)}
                  >
                    {TRACKS.map((t) => (
                      <option key={t}>{t}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            <Button type="submit" className="mt-7 w-full py-3.5">
              Reserve my place
            </Button>
            <p className="mt-3 text-center text-[11px] text-navy-muted">
              Explorer is free. Scholar and Fellow are billed after you confirm.
            </p>
          </form>
        )}
      </div>
    </div>
  );
}
