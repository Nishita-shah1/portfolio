export default function Work() {
  return (
    <section id="work" className="max-w-6xl mx-auto px-4 py-12 bg-gradient-to-r from-pink-50/50 to-lavender-100/30">
      <h2 className="text-3xl font-bold text-gray-700 mb-8 text-center">Work</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {/* Large Card */}
        <div className="bg-pink-100 rounded-lg shadow-lg p-6 flex flex-col justify-between text-lg font-bold text-pink-600 hover:scale-105 transition-all duration-300">
          <img src="/images/research-prototyping.jpg" alt="Research & Prototyping" className="rounded-lg mb-4"/>
          <h3>Research & Prototyping</h3>
          <p className="text-sm mt-2">Creating initial prototypes and conducting research to ensure user needs are met in design.</p>
        </div>

        {/* Medium Cards */}
        <div className="bg-lavender-100 rounded-lg shadow-lg p-6 flex flex-col justify-between text-lg font-bold text-purple-600 hover:scale-105 transition-all duration-300">
          <img src="/images/wireframing.jpg" alt="Wireframing" className="rounded-lg mb-4"/>
          <h3>Wireframing</h3>
          <p className="text-sm mt-2">Designing the structure of a webpage or app interface to map out the user experience.</p>
        </div>
        <div className="bg-pink-100 rounded-lg shadow-lg p-6 flex flex-col justify-between text-lg font-bold text-pink-600 hover:scale-105 transition-all duration-300">
          <img src="/images/usability-testing.jpg" alt="Usability Testing" className="rounded-lg mb-4"/>
          <h3>Usability Testing</h3>
          <p className="text-sm mt-2">Evaluating the product with real users to improve its usability and performance.</p>
        </div>

        {/* Small Cards */}
        <div className="bg-lavender-100 rounded-lg shadow-lg p-6 flex flex-col justify-between text-sm font-bold text-purple-600 hover:scale-105 transition-all duration-300">
          <img src="/images/typography.jpg" alt="Typography" className="rounded-lg mb-4"/>
          <h3>Typography</h3>
          <p className="text-xs mt-2">Selecting and arranging typefaces to ensure readability and visual appeal in designs.</p>
        </div>
        <div className="bg-pink-100 rounded-lg shadow-lg p-6 flex flex-col justify-between text-sm font-bold text-pink-600 hover:scale-105 transition-all duration-300">
          <img src="/images/color-theory.jpg" alt="Color Theory" className="rounded-lg mb-4"/>
          <h3>Color Theory</h3>
          <p className="text-xs mt-2">Using color combinations effectively to communicate a message and create harmony.</p>
        </div>
        <div className="bg-lavender-100 rounded-lg shadow-lg p-6 flex flex-col justify-between text-sm font-bold text-purple-600 hover:scale-105 transition-all duration-300">
          <img src="/images/accessibility.jpg" alt="Accessibility" className="rounded-lg mb-4"/>
          <h3>Accessibility</h3>
          <p className="text-xs mt-2">Ensuring designs are usable by people with various disabilities or limitations.</p>
        </div>
        <div className="bg-pink-100 rounded-lg shadow-lg p-6 flex flex-col justify-between text-sm font-bold text-pink-600 hover:scale-105 transition-all duration-300">
          <img src="/images/interaction-design.jpg" alt="Interaction Design" className="rounded-lg mb-4"/>
          <h3>Interaction Design</h3>
          <p className="text-xs mt-2">Focusing on creating engaging interfaces with good interactions between users and systems.</p>
        </div>
      </div>
    </section>
  );
}
