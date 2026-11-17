
/*
  COSMIC KNOWLEDGE GRAPH
  Main Application Controller
*/

document.addEventListener("DOMContentLoaded", () => {
  // ==========================================
  // 1. CHECK DATA AND LIBRARY
  // ==========================================

  if (typeof vis === "undefined") {
    console.error("vis-network library is missing.");
    showError("ไม่สามารถโหลด vis-network ได้ กรุณาตรวจสอบการเชื่อมต่ออินเทอร์เน็ต");
    return;
  }

  if (typeof nodes === "undefined" || typeof edges === "undefined") {
    console.error("Knowledge graph data is missing.");
    showError("ไม่พบฐานข้อมูล กรุณาตรวจสอบไฟล์ js/data.js");
    return;
  }

  // ==========================================
  // 2. DOM ELEMENTS
  // ==========================================

  const graphContainer = document.getElementById("knowledgeGraph");
  const loadingMessage = document.getElementById("loadingMessage");

  const searchInput = document.getElementById("searchInput");

  const nodeCountElement = document.getElementById("nodeCount");
  const edgeCountElement = document.getElementById("edgeCount");
  const categoryCountElement = document.getElementById("categoryCount");

  const detailsPanel = document.getElementById("detailsPanel");
  const detailCategory = document.getElementById("detailCategory");
  const detailTitle = document.getElementById("detailTitle");
  const detailIcon = document.getElementById("detailIcon");
  const detailDescription = document.getElementById("detailDescription");
  const detailPrinciple = document.getElementById("detailPrinciple");
  const detailFacts = document.getElementById("detailFacts");
  const relatedConcepts = document.getElementById("relatedConcepts");

  const showAllButton = document.getElementById("showAllButton");
  const solarButton = document.getElementById("solarButton");
  const blackHoleButton = document.getElementById("blackHoleButton");
  const physicsButton = document.getElementById("physicsButton");
  const evidenceButton = document.getElementById("evidenceButton");
  const advancedButton = document.getElementById("advancedButton");

  const fitButton = document.getElementById("fitButton");
  const resetButton = document.getElementById("resetButton");
  const zoomInButton = document.getElementById("zoomInButton");
  const zoomOutButton = document.getElementById("zoomOutButton");

  if (!graphContainer) {
    console.error("Graph container was not found.");
    return;
  }

  // ==========================================
  // 3. CONFIGURATION
  // ==========================================

  const categoryButtons = {
    all: showAllButton,
    solar: solarButton,
    blackhole: blackHoleButton,
    physics: physicsButton,
    evidence: evidenceButton,
    advanced: advancedButton
  };

  const categoryColors = {
    solar: "#ffbd69",
    blackhole: "#c084fc",
    physics: "#60d5c5",
    evidence: "#7fa8ff",
    advanced: "#f28ab7"
  };

  const categoryLabels = {
    solar: "Solar Galactic Orbit",
    blackhole: "Black Hole",
    physics: "Fundamental Physics",
    evidence: "Scientific Evidence",
    advanced: "Advanced Exploration"
  };

  let activeCategory = "all";
  let searchTerm = "";
  let selectedNodeId = null;

  // ==========================================
  // 4. PREPARE NODE DATA
  // ==========================================

  const graphNodes = nodes.map((node) => {
    const color = categoryColors[node.category] || "#72b7ff";

    return {
      ...node,
      color: {
        background: color,
        border: color,
        highlight: {
          background: "#ffffff",
          border: color
        },
        hover: {
          background: "#ffffff",
          border: color
        }
      },
      font: {
        color: "#eaf2ff",
        size: node.importance === 3 ? 17 : 14,
        face: "Inter, Noto Sans Thai, sans-serif",
        strokeWidth: 3,
        strokeColor: "#0a1221"
      },
      shape: "dot",
      size: node.importance === 3 ? 25 : node.importance === 2 ? 19 : 14,
      borderWidth: 2,
      borderWidthSelected: 4,
      shadow: {
        enabled: true,
        color: color,
        size: 12,
        x: 0,
        y: 0
      },
      scaling: {
        min: 10,
        max: 32
      },
      title: `${node.label}\n${categoryLabels[node.category] || ""}`
    };
  });

  // ==========================================
  // 5. PREPARE EDGE DATA
  // ==========================================

const graphEdges = edges.map((edge, index) => ({
  id: index + 1,
    ...edge,
    arrows: {
      to: {
        enabled: true,
        scaleFactor: 0.55
      }
    },
    color: {
      color: "rgba(135, 165, 205, 0.32)",
      highlight: "#a9d3ff",
      hover: "#8bbfff",
      opacity: 0.75
    },
    width: 1.2,
    selectionWidth: 2,
    smooth: {
      enabled: true,
      type: "dynamic",
      roundness: 0.35
    },
    font: {
      color: "#9fb4d1",
      size: 10,
      face: "Inter, Noto Sans Thai, sans-serif",
      strokeWidth: 3,
      strokeColor: "#0a1221",
      align: "middle"
    }
  }));

  const nodeDataSet = new vis.DataSet(graphNodes);
  const edgeDataSet = new vis.DataSet(graphEdges);

  // ==========================================
  // 6. NETWORK OPTIONS
  // ==========================================

  const options = {
    autoResize: true,

    nodes: {
      shape: "dot",
      chosen: true
    },

    edges: {
      arrows: "to",
      smooth: {
        enabled: true,
        type: "dynamic"
      }
    },

    physics: {
      enabled: true,
      stabilization: {
        enabled: true,
        iterations: 300,
        updateInterval: 25,
        fit: true
      },
      barnesHut: {
        gravitationalConstant: -6500,
        centralGravity: 0.28,
        springLength: 160,
        springConstant: 0.035,
        damping: 0.35,
        avoidOverlap: 0.6
      },
      minVelocity: 0.75
    },

    interaction: {
      hover: true,
      hoverConnectedEdges: true,
      tooltipDelay: 180,
      navigationButtons: false,
      keyboard: {
        enabled: true,
        bindToWindow: false
      },
      zoomView: true,
      dragView: true,
      dragNodes: true,
      multiselect: true
    },

    layout: {
      improvedLayout: true,
      randomSeed: 42
    }
  };

  // ==========================================
  // 7. CREATE NETWORK
  // ==========================================

  const network = new vis.Network(
    graphContainer,
    {
      nodes: nodeDataSet,
      edges: edgeDataSet
    },
    options
  );

  network.once("stabilizationIterationsDone", () => {
    network.setOptions({
      physics: {
        enabled: false
      }
    });

    network.fit({
      animation: {
        duration: 900,
        easingFunction: "easeInOutQuad"
      }
    });

    hideLoading();
  });

  // Fallback in case stabilization takes too long.
  setTimeout(() => {
    hideLoading();
  }, 7000);

  // ==========================================
  // 8. UPDATE STATISTICS
  // ==========================================

  function updateStatistics() {
    if (nodeCountElement) {
      nodeCountElement.textContent = nodes.length;
    }

    if (edgeCountElement) {
      edgeCountElement.textContent = edges.length;
    }

    if (categoryCountElement) {
      categoryCountElement.textContent = Object.keys(categories).length;
    }
  }

  updateStatistics();

  // ==========================================
  // 9. LOADING AND ERROR HANDLING
  // ==========================================

  function hideLoading() {
    if (loadingMessage) {
      loadingMessage.classList.add("hidden");
    }
  }

  function showError(message) {
    if (loadingMessage) {
      loadingMessage.classList.remove("hidden");
      loadingMessage.textContent = message;
    }
  }

  // ==========================================
  // 10. SHOW NODE DETAILS
  // ==========================================

  function showNodeDetails(nodeId) {
    const node = nodes.find((item) => item.id === nodeId);

    if (!node) return;

    selectedNodeId = nodeId;

    const categoryName =
      categoryLabels[node.category] || "Unknown Category";

    const categoryColor =
      categoryColors[node.category] || "#72b7ff";

    if (detailCategory) {
      detailCategory.textContent = categoryName;
      detailCategory.style.color = categoryColor;
    }

    if (detailTitle) {
      detailTitle.textContent = node.label;
    }

    if (detailIcon) {
      detailIcon.textContent = node.icon || "🌌";
      detailIcon.style.borderColor = categoryColor + "66";
    }

    if (detailDescription) {
      detailDescription.textContent =
        node.description || "ไม่มีรายละเอียด";
    }

    if (detailPrinciple) {
      detailPrinciple.textContent =
        node.principle || "ไม่มีข้อมูลหลักการ";
    }

    // Display facts safely.
    if (detailFacts) {
      detailFacts.replaceChildren();

      const facts = Array.isArray(node.facts) ? node.facts : [];

      if (facts.length === 0) {
        const li = document.createElement("li");
        li.textContent = "ไม่มีข้อมูลเพิ่มเติม";
        detailFacts.appendChild(li);
      } else {
        facts.forEach((fact) => {
          const li = document.createElement("li");
          li.textContent = fact;
          detailFacts.appendChild(li);
        });
      }
    }

    renderRelatedConcepts(nodeId);

    if (detailsPanel) {
      detailsPanel.scrollIntoView({
        behavior: "smooth",
        block: "nearest"
      });
    }
  }

  // ==========================================
  // 11. RELATED CONCEPTS
  // ==========================================

  function renderRelatedConcepts(nodeId) {
    if (!relatedConcepts) return;

    relatedConcepts.replaceChildren();

    const relatedIds = new Set();

    edges.forEach((edge) => {
      if (edge.from === nodeId) {
        relatedIds.add(edge.to);
      }

      if (edge.to === nodeId) {
        relatedIds.add(edge.from);
      }
    });

    const relatedNodes = nodes.filter((node) =>
      relatedIds.has(node.id)
    );

    if (relatedNodes.length === 0) {
      const empty = document.createElement("span");
      empty.className = "empty-state";
      empty.textContent = "ยังไม่มีแนวคิดที่เชื่อมโยง";
      relatedConcepts.appendChild(empty);
      return;
    }

    relatedNodes.forEach((node) => {
      const chip = document.createElement("button");

      chip.type = "button";
      chip.className = "related-chip";
      chip.textContent = node.label;

      chip.style.cursor = "pointer";

      chip.addEventListener("click", () => {
        showNodeDetails(node.id);

        network.selectNodes([node.id]);

        network.focus(node.id, {
          scale: 1.15,
          animation: {
            duration: 700,
            easingFunction: "easeInOutQuad"
          }
        });
      });

      relatedConcepts.appendChild(chip);
    });
  }

  // ==========================================
  // 12. GRAPH NODE CLICK
  // ==========================================

  network.on("click", (event) => {
    if (event.nodes.length > 0) {
      showNodeDetails(event.nodes[0]);
    }
  });

  // ==========================================
  // 13. CATEGORY FILTER
  // ==========================================

  function setActiveButton(category) {
    Object.entries(categoryButtons).forEach(([key, button]) => {
      if (!button) return;

      button.classList.toggle(
        "active",
        key === category
      );
    });
  }

  function applyFilters() {
    const visibleNodeIds = new Set();

    nodes.forEach((node) => {
      const categoryMatches =
        activeCategory === "all" ||
        node.category === activeCategory;

      const searchMatches =
        searchTerm.length === 0 ||
        node.label.toLowerCase().includes(searchTerm) ||
        node.description.toLowerCase().includes(searchTerm) ||
        node.principle.toLowerCase().includes(searchTerm) ||
        node.tags.some((tag) =>
          tag.toLowerCase().includes(searchTerm)
        );

      if (categoryMatches && searchMatches) {
        visibleNodeIds.add(node.id);
      }
    });

    // Show matching nodes.
    nodeDataSet.update(
      nodes.map((node) => ({
        id: node.id,
        hidden: !visibleNodeIds.has(node.id)
      }))
    );

    // Hide edges unless both connected nodes are visible.
    edgeDataSet.update(
      edges.map((edge, index) => ({
        id: edge.id || index + 1,
        hidden:
          !visibleNodeIds.has(edge.from) ||
          !visibleNodeIds.has(edge.to)
      }))
    );

    // Clear selection if selected node is no longer visible.
    if (
      selectedNodeId &&
      !visibleNodeIds.has(selectedNodeId)
    ) {
      selectedNodeId = null;
      network.unselectAll();
    }

    return visibleNodeIds.size;
  }

  function filterByCategory(category) {
    activeCategory = category;
    setActiveButton(category);

    const visibleCount = applyFilters();

    if (visibleCount > 0) {
      network.fit({
        animation: {
          duration: 650,
          easingFunction: "easeInOutQuad"
        }
      });
    }
  }

  // ==========================================
  // 14. CATEGORY BUTTON EVENTS
  // ==========================================

  if (showAllButton) {
    showAllButton.addEventListener("click", () => {
      filterByCategory("all");
    });
  }

  if (solarButton) {
    solarButton.addEventListener("click", () => {
      filterByCategory("solar");
    });
  }

  if (blackHoleButton) {
    blackHoleButton.addEventListener("click", () => {
      filterByCategory("blackhole");
    });
  }

  if (physicsButton) {
    physicsButton.addEventListener("click", () => {
      filterByCategory("physics");
    });
  }

  if (evidenceButton) {
    evidenceButton.addEventListener("click", () => {
      filterByCategory("evidence");
    });
  }

  if (advancedButton) {
    advancedButton.addEventListener("click", () => {
      filterByCategory("advanced");
    });
  }

  // ==========================================
  // 15. SEARCH
  // ==========================================

  if (searchInput) {
    searchInput.addEventListener("input", (event) => {
      searchTerm = event.target.value
        .trim()
        .toLowerCase();

      const visibleCount = applyFilters();

      if (visibleCount > 0) {
        network.fit({
          animation: {
            duration: 400,
            easingFunction: "easeInOutQuad"
          }
        });
      }
    });

    searchInput.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        const firstVisible = nodes.find((node) => {
          const isVisible = !nodeDataSet.get(node.id).hidden;
          return isVisible;
        });

        if (firstVisible) {
          showNodeDetails(firstVisible.id);

          network.focus(firstVisible.id, {
            scale: 1.3,
            animation: true
          });
        }
      }

      if (event.key === "Escape") {
        searchInput.value = "";
        searchTerm = "";
        applyFilters();
      }
    });
  }

  // ==========================================
  // 16. GRAPH CONTROLS
  // ==========================================

  if (fitButton) {
    fitButton.addEventListener("click", () => {
      network.fit({
        animation: {
          duration: 700,
          easingFunction: "easeInOutQuad"
        }
      });
    });
  }

  if (resetButton) {
    resetButton.addEventListener("click", () => {
      activeCategory = "all";
      searchTerm = "";
      selectedNodeId = null;

      if (searchInput) {
        searchInput.value = "";
      }

      network.unselectAll();

      setActiveButton("all");
      applyFilters();

      network.setOptions({
        physics: {
          enabled: true
        }
      });

      network.stabilize(180);

      setTimeout(() => {
        network.setOptions({
          physics: {
            enabled: false
          }
        });

        network.fit({
          animation: {
            duration: 800,
            easingFunction: "easeInOutQuad"
          }
        });
      }, 1200);
    });
  }

  if (zoomInButton) {
    zoomInButton.addEventListener("click", () => {
      const currentScale = network.getScale();

      network.moveTo({
        scale: Math.min(currentScale * 1.25, 3),
        animation: {
          duration: 250
        }
      });
    });
  }

  if (zoomOutButton) {
    zoomOutButton.addEventListener("click", () => {
      const currentScale = network.getScale();

      network.moveTo({
        scale: Math.max(currentScale / 1.25, 0.15),
        animation: {
          duration: 250
        }
      });
    });
  }

  // ==========================================
  // 17. INITIAL STATE
  // ==========================================

  setActiveButton("all");

  if (detailsPanel) {
    detailsPanel.setAttribute("aria-live", "polite");
  }

  console.log("--------------------------------");
  console.log("COSMIC KNOWLEDGE GRAPH");
  console.log("Application initialized.");
  console.log(`Nodes: ${nodes.length}`);
  console.log(`Relationships: ${edges.length}`);
  console.log(`Categories: ${Object.keys(categories).length}`);
  console.log("--------------------------------");

});

