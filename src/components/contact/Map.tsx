import React from 'react';

const Map = () => {
  return (
    <div className="rounded-lg overflow-hidden shadow-lg h-[400px]">
      <iframe
        title="Nexus Office Location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3168.6282365564086!2d-122.08374688468864!3d37.42199997982367!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fba02425dad8f%3A0x6c296c66619367e0!2sGoogleplex!5e0!3m2!1sen!2sus!4v1623456789012!5m2!1sen!2sus"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        loading="lazy"
        className="grayscale"
      />
    </div>
  );
};

export default Map;