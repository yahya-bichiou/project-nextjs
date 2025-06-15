import Logo from "./logo";
import Language from "./language";

export default function Header() {
  return (
    <header className="h-screen">
      <div className={" h-full flex flex-col"}>
        <Language/>
        <Logo/>
        {/* Slogan centré verticalement dans l'espace restant */}
        <div className="flex-1 flex flex-col justify-end pb-60 pl-40">
          <h2 className="text-5xl font-bold text-purple-400">
            La solution la plus rapide
          </h2>
          <h2 className="text-3xl font-bold mt-2">
            Pour gérer vos téléchargements
          </h2>
          <h2 className="text-xl mt-8 text-gray-300">
            Télécharger devrait être simple. C'est pourquoi nous avons créé UploadThing
          </h2>
          <h2 className="text-xl mt-2 text-gray-300">
            Une solution fluide pour gérer les fichiers du bouton au backend.
          </h2>
          <h2 className="text-xl mt-2 text-gray-300">
            Rapide, sécurisé et conçu pour les développeurs
          </h2>
          <div className="flex items-center gap-4">
            <button className="bg-purple-400 hover:bg-purple-500 transition-colors duration-200 rounded-lg text-white mt-5 px-6 py-3 font-medium">
              Commencer
            </button>
            <a href="fr/docs" className="flex items-center gap-1 text-purple-400 hover:text-purple-500 transition-colors mt-5 group">
              Documentation <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}