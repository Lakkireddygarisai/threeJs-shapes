# threeJs-shapes
# Three.js Scene Component

This project demonstrates a React component using Three.js to render multiple geometries with labels underneath each geometry. Each geometry rotates on its axis within the scene.

## Getting Started

### Prerequisites

Make sure you have Node.js and npm (or yarn) installed on your machine.

### Installing Dependencies

\`\`\`bash
npm install three
\`
or
\`
\`\`\`

### Running the Project

To start the development server, run:

\`\`\`bash
npm start
\`
or
\`
\`\`\`

### Viewing the Scene

Open your web browser and go to \`http://localhost:3000\` to view the Three.js scene.

## Components

### ThreeScene Component

The \`ThreeScene\` component sets up a Three.js scene with the following features:
- Multiple geometries: Sphere, Cylinder, Plane, Torus, Torus Knot, Dodecahedron, Icosahedron, Octahedron, Tetrahedron, Ring, Circle, Box, and Cone.
- Each geometry is scaled larger (\`scale.set(3, 3, 3)\`) for visibility.
- Labels underneath each geometry display their names in a bold, larger font (\`Bold 30px Arial\`).
- Geometries rotate continuously on their axes.

## Folder Structure

\`\`\`
/src
  /components
    ThreeScene.js
  App.js
  index.js
README.md
\`\`\`

## Built With

- [React](https://reactjs.org/) - A JavaScript library for building user interfaces
- [Three.js](https://threejs.org/) - A JavaScript library for 3D graphics in web browsers

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Thanks to Three.js and React communities for their powerful libraries and resources.
