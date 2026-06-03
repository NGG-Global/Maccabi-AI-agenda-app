"use client";

import { useState } from "react";
import { ChevronDown, ExternalLink, Smartphone } from "lucide-react";
import { AgendaItem } from "@/types";

interface AgendaSectionProps {
  items: AgendaItem[];
}

function AgendaRow({ item, index }: { item: AgendaItem; index: number }) {
  const [open, setOpen] = useState(false);
  const isBreak = !item.description && !item.facilitator && !item.tool;

  return (
    <div
      className={`rounded-xl border overflow-hidden transition-all duration-300 animate-fade-in-up ${
        isBreak
          ? "bg-gray-50 border-maccabi-border opacity-60"
          : item.tool
          ? `border-primary-100 bg-white shadow-sm ${open ? "shadow-md border-primary-200" : "hover:border-primary-200 hover:shadow-md"}`
          : "bg-white border-maccabi-border hover:border-primary-100 hover:shadow-sm"
      }`}
      style={{ animationDelay: `${index * 40}ms` }}
    >
      <button
        onClick={() => item.tool && setOpen((v) => !v)}
        className={`w-full text-right p-4 ${item.tool ? "cursor-pointer" : "cursor-default"}`}
      >
        <div className="flex flex-col sm:flex-row sm:items-start gap-3">
          {/* Time chip */}
          <div className="shrink-0">
            <span className={`font-mono text-xs font-semibold px-2 py-1 rounded-md ${
              item.tool ? "text-primary bg-primary-50" : "text-maccabi-muted bg-gray-100"
            }`}>
              {item.time}
            </span>
          </div>

          {/* Content */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between gap-2">
              <h3 className="font-semibold text-maccabi-text text-sm">{item.title}</h3>
              {item.tool && (
                <div className="flex items-center gap-1.5 shrink-0">
                  <span className="hidden sm:inline-flex items-center gap-1 text-xs font-medium text-primary bg-primary-50 border border-primary-100 px-2 py-0.5 rounded-full">
                    <Smartphone size={10} />
                    כלי דיגיטלי
                  </span>
                  <ChevronDown
                    size={15}
                    className={`text-primary transition-transform duration-300 ${open ? "rotate-180" : ""}`}
                  />
                </div>
              )}
            </div>
            {item.description && (
              <p className="text-maccabi-muted text-xs mt-1 leading-relaxed">{item.description}</p>
            )}
            {item.facilitator && (
              <p className="text-xs text-primary-500 mt-1.5 font-medium">מנחה: {item.facilitator}</p>
            )}
          </div>
        </div>
      </button>

      {/* Expanded tool panel */}
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          open ? "max-h-48 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        {item.tool && (
          <div className="px-4 pb-4 border-t border-primary-100 bg-gradient-to-b from-primary-50/60 to-white">
            <div className="pt-3 space-y-2.5">
              <p className="text-xs font-bold text-primary flex items-center gap-1.5">
                <Smartphone size={12} />
                {item.tool.name}
              </p>
              <p className="text-xs text-maccabi-muted leading-relaxed">{item.tool.description}</p>
              {item.tool.url ? (
                <a
                  href={item.tool.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-white bg-primary hover:bg-primary-600 px-4 py-2 rounded-lg transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md shadow-sm"
                >
                  {item.tool.buttonLabel ?? "פתח כלי"}
                  <ExternalLink size={11} />
                </a>
              ) : (
                <span className="inline-flex items-center gap-1.5 text-xs font-medium text-primary-400 bg-primary-50 border border-primary-100 px-3 py-1.5 rounded-lg">
                  {item.tool.buttonLabel ?? "קישור יתעדכן בקרוב"}
                </span>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default function AgendaSection({ items }: AgendaSectionProps) {
  return (
    <div className="space-y-2">
      {items.map((item, index) => (
        <AgendaRow key={index} item={item} index={index} />
      ))}
    </div>
  );
}
