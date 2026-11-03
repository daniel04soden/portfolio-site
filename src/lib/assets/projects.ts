import shush from "./shush.png";
import nix from "./nix.png"

export interface Project {
    title: string;
    description: string;
    url: string;
    image: string;      // was 'image'
    imageAlt: string;   // was 'imageAlt'
}

export const project: Project[] = [
    {
        title: "Goshush",
        description: "Unix-like Shell written in golang",
        url: "https://git.danielsoden.org/daniels/goshush",
        image: shush,           // fixed: was 'img'
        imageAlt: "Preview of the goshush shell in action"  // fixed: was 'imgAlt'
    },
    {
        title: "My HomeLab",
        description: "HomeLab Where this website and other useful services such as my Git Instance are hosted",
        url: "https://homepage.danielsoden.org",
        image: nix,
        imageAlt: "NixOS Logo"
    },
]
