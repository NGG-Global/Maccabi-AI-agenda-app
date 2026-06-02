"use client";

import { useState } from "react";
import { ChevronDown, ExternalLink } from "lucide-react";
import { AgendaItem } from "@/types";

interface AgendaSectionProps {
  items: AgendaItem[];
}

function AgendaRow({ item }: { item: AgendaItem }) {
  const [open, setOpen] = useState(false);
  const isBreak = !item.description && !item.facilitator && !item.tool;

  return (
    <div
      className={`card overflow-hidden transition-all duration-200 ${
        isBreak ? "bg-gray-50 opacity-60" : ""
      } ${item.tool ? "border-primary-100 hover:border-primary-300" : ""}`}
    >
      <button
        onClick={() => item.tool && setOpen((v) => !v)}
        className={`w-full text-right p-4 ${item.tool ? "cursor-pointer" : "cursor-default"}`}
      >
        <div className="flex flex-col sm:flex-row sm:items-start gap-3">
          {/* Time */}
          <div className="shrink-0">
            <span className="font-mono text-xs font-semibold text-primary bg-primary-50 px-2 py-1 rounded-md">
              {item.time}
            </span>
          </div>

          {/* Content */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between gap-2">
              <h3 className="font-semibold text-maccabi-text text-sm">{item.title}</h3>
              {item.tool && (
                <div className="flex items-center gap-1.5 shrink-0">
                  <span className="text-xs font-medium text-primary bg-primary-50 border border-primary-100 px-2 py-0.5 rounded-full">
                    כלי דיגיטלי
                  </span>
                  <ChevronDown
                    size={15}
                    className={`text-primary transition-transform duration-200 ${open ? "rotate-180" : ""}`}
                  />
                </div>
              )}
            </div>
            {item.description && (
              <p className="text-maccabi-muted text-xs mt-1 leading-relaxed">{item.description}</p>
            )}
            {item.facilitator && (
              <p className="text-xs text-primary-500 mt-1 font-medium">מנחה: {item.facilitator}</p>
            )}
          </div>
        </div>
      </button>

      {/* Expanded tool panel */}
      {item.tool && open && (
        <div className="px-4 pb-4 border-t border-primary-100 bg-primary-50/40">
          <div className="pt-3 space-y-2">
            <p className="text-xs font-semibold text-primary">{item.tool.name}</p>
            <p className="text-xs text-maccabi-muted leading-relaxed">{item.tool.description}</p>
            {item.tool.url ? (
              <a
                href={item.tool.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-white bg-primary hover:bg-primary-600 px-3 py-1.5 rounded-lg transition-colors mt-1"
              >
                {item.tool.buttonLabel ?? "פתח כלי"}
                <ExternalLink size={12} />
              </a>
            ) : (
              <span className="inline-flex items-center gap-1.5 text-xs font-medium text-primary-400 bg-primary-50 border border-primary-100 px-3 py-1.5 rounded-lg mt-1">
                {item.tool.buttonLabel ?? "קישור יתעדכן בקרוב"}
              </span>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default function AgendaSection({ items }: AgendaSectionProps) {
  return (
    <div className="space-y-2">
      {items.map((item, index) => (
        <AgendaRow key={index} item={item} />
      ))}
    </div>
  );
}
