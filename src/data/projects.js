/**
 * Project data structure
 * Maps to actual projects from marvinmelzer.com
 */

export const projects = [
  {
    id: 'braun-desk-fan',
    slug: 'hl-3',
    title: 'Braun Desk Fan',
    year: 2024,
    image: '/braun_deskfan.png',
    description: 'Reimagining the iconic Braun desk fan for modern mobile workspaces',
    skills: ['Design Thinking', 'Sketching', '3D CAD', 'Rendering', 'Animation', '3D Printing'],
    content: {
      motivation: 'The original Braun desk fan (from 1959) is beautifully iconic, but not suited for modern use. Today\'s workspaces are more mobile and minimalist. I wanted a version that fits how people actually live now.',
      context: 'Internship at Braun reimagining its classic desk fan (2024, 2 weeks)',
      problems: [
        'Bulky and fragile',
        'Requires wall plug → not portable',
        'Doesn\'t match modern desk setups'
      ],
      goals: [
        'Preserve Braun\'s minimalist aesthetic',
        'Use modern components',
        'Silent operation',
        'Add portability'
      ],
      solution: 'Protective cover that transforms into a stand, smaller motors allow broader blade span, USB-C powered for plug-and-play desk use',
    }
  },
  {
    id: 'a-table',
    slug: 'a-table',
    title: 'A Table',
    year: 2023,
    image: '/fens_render.png',
    description: 'Furniture design exploring minimalist form and functionality',
    skills: ['Furniture Design', '3D Modeling', 'CAD'],
    content: {
      motivation: 'A study in minimal form and maximum function',
      context: 'Personal project 2023',
      problems: [],
      goals: ['Clean design', 'Practical use'],
      solution: 'A beautifully simple table for modern spaces'
    }
  },
  {
    id: 'breath-conductor',
    slug: 'lumenhale',
    title: 'Breath Conductor',
    year: 2025,
    image: '/breathconductor.png',
    description: 'Interactive breathing meditation device',
    skills: ['Electronics', 'Physical Computing', 'Design'],
    content: {
      motivation: 'Help users practice mindful breathing with tactile feedback',
      context: 'Recent project 2025',
      problems: [],
      goals: ['Meditative experience', 'Portable design'],
      solution: 'Ambient light that responds to breathing patterns'
    }
  },
  {
    id: 'gaia',
    slug: 'gaia',
    title: 'Gaia',
    year: 2023,
    image: '/gaia.png',
    description: 'Environmental monitoring and visualization system',
    skills: ['IoT', 'Data Visualization', 'Embedded Systems'],
    content: {
      motivation: 'Make environmental data tangible and meaningful',
      context: 'Personal exploration 2023',
      problems: [],
      goals: ['Connect people to nature', 'Beautiful data representation'],
      solution: 'Physical display of real-time environmental metrics'
    }
  }
];

export const getProjectBySlug = (slug) => {
  return projects.find(p => p.slug === slug);
};

export const getProjectById = (id) => {
  return projects.find(p => p.id === id);
};
