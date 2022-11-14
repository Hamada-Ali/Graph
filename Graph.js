class Graph {
	constructor() {
		this.adjacencyList = {};
	}
	addVertex(vertex) {
		if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
	}
	addEdge(edge, vertex) {
		let edgeKey, vertexKey;
		for(let key in this.adjacencyList) {
			if(key === edge) edgeKey = key;
			if(key === vertex)  vertexKey = key;
			if(vertexKey === vertex && edgeKey === edge) {
			this.adjacencyList[vertexKey].push(edgeKey);
				return undefined;
			}
	  }
		return false;
	}
    removeEdge(vertex1,vertex2){
         this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
             v => v !== vertex2
         );
         this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
            v => v !== vertex1
         );
    }
	deleteVertex(vertex) {
	for(let key in this.adjacencyList) {
		for(let i=0;i<this.adjacencyList[key].length;i++) {
		if(this.adjacencyList[key][i] === vertex) {
			this.adjacencyList[key].splice(i, 1);
			}
		}
		if(key === vertex) {
			delete this.adjacencyList[key];
			return this;
			}
		}	
	}

}

const g = new Graph();
g.addVertex("cairo");
g.addVertex("alex");
g.addVertex("fowa");
g.addEdge("fowa", "alex");
g.addEdge("alex", "fowa");