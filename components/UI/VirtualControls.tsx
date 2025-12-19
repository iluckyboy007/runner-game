
import React from 'react';
import { ArrowLeft, ArrowRight, ArrowUp, Shield } from 'lucide-react';
import { audio } from '../System/Audio';

export const VirtualControls: React.FC = () => {

    // Helper to dispatch events
    const trigger = (action: string) => {
        window.dispatchEvent(new CustomEvent(action));
        // Optional: haptic feedback could go here
        if (navigator.vibrate) navigator.vibrate(10);
    };

    return (
        <div className="absolute bottom-4 left-0 right-0 px-6 py-4 flex justify-between items-end z-[90] select-none touch-none pointer-events-none">

            {/* Left Side: Movement */}
            <div className="flex gap-4 pointer-events-auto">
                <button
                    className="w-20 h-20 bg-cyan-900/40 border-2 border-cyan-500/50 rounded-full flex items-center justify-center active:bg-cyan-500/40 active:scale-95 transition-all backdrop-blur-sm"
                    onTouchStart={(e) => { e.preventDefault(); trigger('control-left'); }}
                    onMouseDown={(e) => { e.preventDefault(); trigger('control-left'); }}
                >
                    <ArrowLeft className="w-10 h-10 text-cyan-400" />
                </button>

                <button
                    className="w-20 h-20 bg-cyan-900/40 border-2 border-cyan-500/50 rounded-full flex items-center justify-center active:bg-cyan-500/40 active:scale-95 transition-all backdrop-blur-sm"
                    onTouchStart={(e) => { e.preventDefault(); trigger('control-right'); }}
                    onMouseDown={(e) => { e.preventDefault(); trigger('control-right'); }}
                >
                    <ArrowRight className="w-10 h-10 text-cyan-400" />
                </button>
            </div>

            {/* Right Side: Action & Jump */}
            <div className="flex flex-col gap-4 items-end pointer-events-auto">

                {/* Skill Button (Small) */}
                <button
                    className="w-16 h-16 bg-yellow-900/40 border-2 border-yellow-500/50 rounded-full flex items-center justify-center active:bg-yellow-500/40 active:scale-95 transition-all backdrop-blur-sm mb-4"
                    onTouchStart={(e) => { e.preventDefault(); trigger('control-action'); }}
                    onMouseDown={(e) => { e.preventDefault(); trigger('control-action'); }}
                >
                    <Shield className="w-8 h-8 text-yellow-400" />
                </button>

                {/* Jump Button (Big) */}
                <button
                    className="w-24 h-24 bg-purple-900/40 border-2 border-purple-500/50 rounded-full flex items-center justify-center active:bg-purple-500/40 active:scale-95 transition-all backdrop-blur-sm shadow-[0_0_20px_rgba(168,85,247,0.3)]"
                    onTouchStart={(e) => { e.preventDefault(); trigger('control-jump'); }}
                    onMouseDown={(e) => { e.preventDefault(); trigger('control-jump'); }}
                >
                    <ArrowUp className="w-12 h-12 text-purple-400" />
                </button>
            </div>

        </div>
    );
};
