// src/components/Services/Services.tsx

import { useState } from "react"
import { services, type Service } from "./services.data"
import ServiceCard from "./ServiceCard"
import ServiceModal from "./ServiceModal"

const Services = () => {
  const [selected, setSelected] = useState<Service | null>(null)

  return (
    <section id="services" className="py-18 px-6 pb-32">
      
      <div className="max-w-[1100px] mx-auto">
        
        <div className="mb-6">
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            Услуги
        </h2>

        <div className="w-12 h-[2px] bg-[var(--accent)] " />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              onClick={() => setSelected(service)}
            />
          ))}
        </div>

      </div>

      {selected && (
        <ServiceModal
          service={selected}
          onClose={() => setSelected(null)}
        />
      )}
    </section>
  )
}

export default Services