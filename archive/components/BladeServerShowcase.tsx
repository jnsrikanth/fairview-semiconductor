"use client";

import { useState } from "react";
import Link from "next/link";
import { BLADE_SERVERS } from "@/content/specs";

export function BladeServerShowcase() {
  const [activeSlug, setActiveSlug] = useState<string>("1u");
  const currentBlade = BLADE_SERVERS.skus.find((s) => s.slug === activeSlug) ?? BLADE_SERVERS.skus[0];

  return (
    <div className="blade-showcase">
      {/* Form factor selector tabs */}
      <div className="blade-tabs" role="tablist" aria-label="Blade server form factor selection">
        {BLADE_SERVERS.skus.map((blade) => {
          const isSelected = blade.slug === activeSlug;
          return (
            <button
              key={blade.slug}
              role="tab"
              aria-selected={isSelected}
              aria-controls={`panel-${blade.slug}`}
              id={`tab-${blade.slug}`}
              className={`blade-tab ${isSelected ? "active" : ""}`}
              onClick={() => setActiveSlug(blade.slug)}
            >
              <span className="blade-tab-unit">{blade.slug.toUpperCase()}</span>
              <div className="blade-tab-info">
                <span className="blade-tab-title">{blade.name}</span>
                <span className="blade-tab-meta">{blade.delivery} · {blade.memoryBandwidth}</span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Active Blade Chassis Card */}
      <div
        id={`panel-${currentBlade.slug}`}
        role="tabpanel"
        aria-labelledby={`tab-${currentBlade.slug}`}
        className="blade-panel"
      >
        <div className="blade-chassis-visual">
          <div className="chassis-header">
            <div className="chassis-leds">
              <span className="led led-vital" title="System Vitality Status: Optimal"></span>
              <span className="led led-gallium" title="Gallium HBM4 Link: Synced"></span>
              <span className="led led-stallion" title="Stallion GPU Clocks: Locked"></span>
            </div>
            <div className="chassis-label">
              <strong>FAIRVIEW SYSTEMS</strong> · {currentBlade.id} · {currentBlade.formFactor.toUpperCase()}
            </div>
            <span className="badge badge-vital">{currentBlade.delivery}</span>
          </div>

          {/* Schematic visual based on form factor */}
          <div className={`chassis-rack-unit unit-${currentBlade.slug}`}>
            <div className="chassis-front-bay">
              <div className="bay-label">STORAGE / I/O</div>
              <div className="drive-slots">
                {Array.from({ length: currentBlade.slug === "1u" ? 8 : currentBlade.slug === "2u" ? 16 : 24 }).map((_, i) => (
                  <div key={i} className="drive-slot" title={`Gen5 NVMe Bay ${i + 1}`}>
                    <span className="drive-led"></span>
                  </div>
                ))}
              </div>
            </div>

            <div className="chassis-compute-block">
              <div className="compute-label">COMPUTE MATRIX (GPU + HBM4 UNIFIED)</div>
              <div className="silicon-grid">
                {Array.from({ length: currentBlade.slug === "1u" ? 4 : currentBlade.slug === "2u" ? 8 : 16 }).map((_, i) => (
                  <div key={i} className="gpu-node-box">
                    <span className="gpu-node-title">NODE {i + 1}</span>
                    <span className="gpu-node-tech">STALLION + GALLIUM</span>
                    <span className="gpu-node-hbm">HBM4 8.192 TB/s</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="chassis-rear-io">
              <div className="io-ports">
                <span className="port-tag">CXL 3.1 / PCIe 6</span>
                <span className="port-tag">800GbE OSFP</span>
                <span className="port-tag liquid-tag">LIQUID LOOP IN/OUT</span>
              </div>
            </div>
          </div>
        </div>

        {/* Technical specs breakdown */}
        <div className="blade-details-grid">
          <div className="blade-stat-card">
            <span className="stat-label">Compute Capacity</span>
            <strong className="stat-val stat-vital">{currentBlade.computeConfig}</strong>
            <span className="stat-sub">{currentBlade.tflopsFP32}</span>
          </div>

          <div className="blade-stat-card">
            <span className="stat-label">Unified HBM4 Memory</span>
            <strong className="stat-val stat-gallium">{currentBlade.memoryHBM4}</strong>
            <span className="stat-sub">{currentBlade.memoryBandwidth}</span>
          </div>

          <div className="blade-stat-card">
            <span className="stat-label">Fabric & Interconnect</span>
            <strong className="stat-val">{currentBlade.interconnect}</strong>
            <span className="stat-sub">{currentBlade.networking}</span>
          </div>

          <div className="blade-stat-card">
            <span className="stat-label">Thermal & Power Architecture</span>
            <strong className="stat-val stat-stallion">{currentBlade.powerDraw}</strong>
            <span className="stat-sub">{currentBlade.cooling}</span>
          </div>
        </div>

        <div className="blade-footer-actions">
          <div className="blade-role-summary">
            <strong>Target Architecture Role:</strong> {currentBlade.primaryRole}
          </div>
          <Link href="/design-in" className="btn btn-primary">
            Request {currentBlade.id} Early Access Packet
          </Link>
        </div>
      </div>
    </div>
  );
}
