import { CAKE_TYPES } from "../../types/caketypes";
import { TYPE_GALLERY } from "../../types/data/gallery";

export const AboutSection: React.FC<{ selectedType: string | null; setSelectedType: (type: string | null) => void }> = ({
  selectedType,
  setSelectedType,
}) => {
  return (
    <section
      id="about"
      className="mt-16 bg-gradient-to-br from-white-50 to-white-100 "
    >
      <div className="flex flex-col gap-10">
        <div className="w-full">
          <h2 className="text-4xl font-serif text-black mb-4">Our Story 🍰</h2>
          <p className="text-lg text-black leading-relaxed mb-8 font-sans">
            <span className="text-black font-mono font-semibold">Ɛvivi Bakery </span>is a family-owned bakery where we believe every celebration deserves
            a centerpiece. We specialize in custom cakes, baked with passion and crafted from the
              finest locally-sourced ingredients. Our goal is to create not just a cake, but a
              memorable experience that brings people together.
              From elegant wedding tiers to whimsical birthday creations, we work closely with
            you to design a cake that perfectly captures the spirit of your event and reflects your personal
                story. We take pride in our artistry, ensuring each detail is meticulously handcrafted, because for
          us, every slice is a promise of a beautiful memory.
          </p>

          <div className="mt-8">
            <h3 className="text-3xl font-serif text-black mb-4">Our Cake Collections</h3>

            {/* Mobile Dropdown */}
            <div className="sm:hidden mb-6 ">
              <select
                onChange={(e) => setSelectedType(e.target.value || null)}
                value={selectedType || ""}
                className="w-full p-3 rounded-lg border border-gray-300 text-black font-medium"
              >
                <option value="">All Cakes</option>
                {CAKE_TYPES.map((t) => (
                  <option key={t.key} value={t.key}>
                    {t.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Desktop Buttons */}
            <div className="hidden sm:flex flex-wrap gap-2 mb-6">
              <button
                onClick={() => setSelectedType(null)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ease-in-out ${
                  !selectedType
                    ? "bg-rose-600 text-white shadow-lg scale-105"
                    : "bg-rose-200 text-black hover:bg-rose-300"
                }`}
              >
                All Cakes
              </button>
              {CAKE_TYPES.map((t) => (
                <button
                  key={t.key}
                  onClick={() => setSelectedType(t.key)}
                  className={`px-6 py-3 rounded-full font-semibold font-serif transition-all duration-300 ease-in-out ${
                    selectedType === t.key
                      ? "bg-rose-600 text-white shadow-lg scale-105"
                      : "bg-rose-200 text-black hover:bg-rose-300"
                  }`}
                >
                  {t.label}
                </button>
              ))}
            </div>

            <div className="mt-6">
              <h4 className=" font-serif text-center shadow-orange-100 text-3xl text-black mb-4">
                {selectedType ? CAKE_TYPES.find((c) => c.key === selectedType)?.label : "All Cakes"}
              </h4>

              {/* ✅ Mobile: 2x2 grid */}
              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 py-2">
                {(selectedType ? TYPE_GALLERY[selectedType] : Object.values(TYPE_GALLERY).flat()).map((src, i) => (
                  <div
                    key={i}
                    className="group relative rounded-2xl overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-300"
                  >
                    <img
                      src={src}
                      className="w-full h-40 sm:h-64 object-cover object-center transition-all duration-300 group-hover:filter group-hover:brightness-90"
                      alt={`${selectedType}-${i}`}
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
