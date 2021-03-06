const d3 = require('d3-graphviz');

const getNodeEdges = (node, length) => {
    const edges = node.edges(length);
    return edges ? [edges] : [];
};

const createGraphFromNodeSystem = (evaluatedNodeSystem) => {
    const nodes = [];
    let edges = [];
    evaluatedNodeSystem.forEach(node => {
        nodes.push(node.toString());
        const nodeEdges = getNodeEdges(node, evaluatedNodeSystem.length);
        edges = [...edges, ...nodeEdges];
    });

    return { nodes: nodes.join(' '), edges: edges.join(' ') };
};

const buildGraph = (evaluatedNodeSystem) => {
    const { nodes, edges } = createGraphFromNodeSystem(evaluatedNodeSystem); 
    d3.graphviz('#graph').renderDot(`digraph { node [style="filled"] ${nodes} ${edges} }`);
};

export default buildGraph;