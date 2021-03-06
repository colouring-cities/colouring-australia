/**
 * An enumeration of all categories in the system.
 * The string value is also the category URL slug.
 */
export enum Category {
    Location = 'location',
    LandUse = 'use',
    Type = 'type',
    Age = 'age',
    Size = 'size',
    Construction = 'construction',
    Streetscape = 'streetscape',
    Team = 'team',
    Planning = 'planning',
    Sustainability = 'sustainability',
    Dynamics = 'dynamics',
    Community = 'community'
    // ,Test = 'test'
}

/**
 * This is the sole configuration variable that defines the order of the categories
 * in the category grid. The order in the enum defition or the other configs does
 * not affect the order of the grid.
 */
export const categoriesOrder: Category[] = [
    Category.Location,
    Category.LandUse,
    Category.Type,
    Category.Age,
    Category.Size,
    Category.Construction,
    Category.Streetscape,
    Category.Team,
    Category.Planning,
    Category.Sustainability,
    Category.Dynamics,
    Category.Community
    //, Category.Test
];

interface CategoryDefinition {
    inactive?: boolean;
    slug: string;
    name: string;
    aboutUrl: string;
    intro: string;
}

export const categoriesConfig: {[key in Category]: CategoryDefinition} = {
    [Category.Age]: {
        slug: 'age',
        name: 'Age',
	aboutUrl: 'https://www.ahdap.org/colouring-sydney#age',
        intro: 'Building age data can support energy analysis and help predict long-term change.',
    },
    [Category.Size]: {
        slug: 'size',
        name: 'Size',
        aboutUrl: 'https://www.ahdap.org/colouring-sydney#shapeandsize',
        intro: 'How big are buildings?',
    },
    [Category.Team]: {
        inactive: true,
        slug: 'team',
        name: 'Team',
	aboutUrl: 'https://www.ahdap.org/colouring-sydney#team',
        intro: 'Who built the buildings? Coming soon…',
    },
    [Category.Construction]: {
        slug: 'construction',
        name: 'Construction',
	aboutUrl: 'https://www.ahdap.org/colouring-sydney#construction',
        intro: 'How are buildings built?',
    },
    [Category.Location]: {
        slug: 'location',
        name: 'Location',
	aboutUrl: 'https://www.ahdap.org/colouring-sydney#location',
        intro: 'Where are the buildings? Address, location and cross-references.',
    },
    [Category.Community]: {
        slug: 'community',
        name: 'Community',
	aboutUrl: 'https://www.ahdap.org/colouring-sydney#community',
        intro: 'How does this building work for the local community?',
    },
    [Category.Planning]: {
        slug: 'planning',
        name: 'Planning',
	aboutUrl: 'https://www.ahdap.org/colouring-sydney#planning',
        intro: 'Planning controls relating to protection and reuse.',
    },
    [Category.Sustainability]: {
        slug: 'sustainability',
        name: 'Sustainability',
	aboutUrl: 'https://www.ahdap.org/colouring-sydney#sustainability',
        intro: 'Are buildings energy efficient?',
    },
    [Category.Type]: {
        slug: 'type',
        name: 'Type',
	aboutUrl: 'https://www.ahdap.org/colouring-sydney#buildingtypology',
        intro: 'How were buildings previously used?',
    },
    [Category.LandUse]: {
        slug: 'use',
        name: 'Current Use',
	aboutUrl: 'https://www.ahdap.org/colouring-sydney#use',
        intro: 'How are buildings used, and how does use change over time?',
    },
    [Category.Streetscape]: {
        inactive: true,
        slug: 'streetscape',
        name: 'Streetscape',
	aboutUrl: 'https://www.ahdap.org/colouring-sydney#greenery',
        intro: "What's the building's context? Coming soon…",
    },
    [Category.Dynamics]: {
        slug: 'dynamics',
        name: 'Dynamics',
	aboutUrl: 'https://www.ahdap.org/colouring-sydney#dynamics',
        intro: 'How has the site of this building changed over time?'
    }
    // ,
    // [Category.Test]: {
    //     slug: 'test',
    //     name: 'Test',
    //     aboutUrl: 'https://www.ahdap.org/colouring-sydney#use',
    //     intro: 'Test?',
    // }
};
