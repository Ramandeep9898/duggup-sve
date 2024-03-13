
import Profile from "$lib/assets/profilee.png";
import { CandlestickChart, Home, BookOpen, SquarePlus } from 'lucide-svelte';


export const headerConfig = [
    {
        heading: "Home",
        icon: Home,
        variant: "ghost"
    },

    {
        heading: "Explore",
        icon: CandlestickChart,

        variant: "ghost"
    },

    {
        heading: "Learn",
        icon: BookOpen,

        variant: "ghost"
    },

    {
        heading: "Post",
        icon: SquarePlus,

        variant: "primary"
    },

]

export const headerDropdownConfig = {
    profile: Profile,
    profileName: "Krishna Kiran",
    options: [
        {
            option: "option1"
        },
        {
            option: "option1"
        },
        {
            option: "option1"
        },
    ]
}

