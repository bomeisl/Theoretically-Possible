import React, { useState, useEffect, useRef } from 'react';
import { Github, Youtube, MessageCircle, Twitter, Mail, ExternalLink, Code, Cpu, Zap, BookOpen } from 'lucide-react';
import Kyle from "./Kyle222.jpg"

const PhysicsPortfolio = () => {
    const [isVisible, setIsVisible] = useState(false);
    const heroCanvasRef = useRef(null);
    const aboutCanvasRef = useRef(null);
    const expertiseCanvasRef = useRef(null);
    const toolsCanvasRef = useRef(null);

    // Common animation parameters
    const cols = 100;
    const rows = 100;

    let velocities = [
        [0,1], [0,-1], [1,0], [-1,0],
        [1,1], [-1,-1], [1,-1], [-1,1]
    ];

    // Hero Section - Simplified Lattice Gas
    useEffect(() => {
        const canvas = heroCanvasRef.current;
        if (!canvas) return;

        const context = canvas.getContext('2d');
        let animationId;

        const createLatticeArray = () => {
            let array = [];
            for (let i = 0; i < cols; i++) {
                array[i] = Array(rows);
                for (let j = 0; j < rows; j++) {
                    let v_seed = Math.floor(Math.random() * 8);
                    if (i === 0 || j === 0 || i === cols - 1 || j === rows - 1) {
                        array[i][j] = [0, v_seed];
                    } else {
                        array[i][j] = Math.random() < 0.4 ? [1, v_seed] : [0, v_seed];
                    }
                }
            }
            return array;
        };

        let latticeArray = createLatticeArray();

        const hopLattice = (array) => {
            let newArray = JSON.parse(JSON.stringify(array));

            for (let i = 0; i < rows; i++) {
                for (let j = 0; j < cols; j++) {
                    newArray[i][j][0] = 0;
                }
            }

            for (let i = 1; i < rows-1; i++) {
                for (let j = 1; j < cols-1; j++) {
                    if (array[i][j][0] === 1) {
                        let velocity = array[i][j][1];
                        let new_x = i + velocities[velocity][0];
                        let new_y = j + velocities[velocity][1];

                        // Wall bouncing
                        if (new_x <= 0 || new_x >= rows-1) {
                            if (velocity === 2) velocity = 3;
                            else if (velocity === 3) velocity = 2;
                            else if (velocity === 4) velocity = 7;
                            else if (velocity === 5) velocity = 6;
                            else if (velocity === 6) velocity = 5;
                            else if (velocity === 7) velocity = 4;
                            new_x = Math.max(1, Math.min(rows-2, new_x));
                        }

                        if (new_y <= 0 || new_y >= cols-1) {
                            if (velocity === 0) velocity = 1;
                            else if (velocity === 1) velocity = 0;
                            else if (velocity === 4) velocity = 6;
                            else if (velocity === 5) velocity = 7;
                            else if (velocity === 6) velocity = 4;
                            else if (velocity === 7) velocity = 5;
                            new_y = Math.max(1, Math.min(cols-2, new_y));
                        }

                        if (new_x > 0 && new_x < rows-1 && new_y > 0 && new_y < cols-1) {
                            newArray[new_x][new_y] = [1, velocity];
                        }
                    }
                }
            }
            return newArray;
        };

        const drawLattice = (array) => {
            context.clearRect(0, 0, canvas.width, canvas.height);
            for (let i = 0; i < rows; i++) {
                for (let j = 0; j < cols; j++) {
                    if (array[i][j][0] === 1) {
                        let x = i * (canvas.width / rows);
                        let y = j * (canvas.height / cols);
                        context.fillStyle = 'rgba(102, 126, 234, 0.6)';
                        context.fillRect(x, y, canvas.width / rows, canvas.height / cols);
                    }
                }
            }
        };

        const animate = () => {
            latticeArray = hopLattice(latticeArray);
            drawLattice(latticeArray);
            animationId = requestAnimationFrame(animate);
        };

        animationId = requestAnimationFrame(animate);

        return () => {
            if (animationId) cancelAnimationFrame(animationId);
        };
    }, []);

    // About Section - Fluid Dynamics
    useEffect(() => {
        const canvas = aboutCanvasRef.current;
        if (!canvas) return;

        const context = canvas.getContext('2d');
        let animationId;
        let particles = [];

        // Initialize fluid particles
        for (let i = 0; i < 150; i++) {
            particles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                vx: (Math.random() - 0.5) * 2,
                vy: (Math.random() - 0.5) * 2,
                size: Math.random() * 3 + 1
            });
        }

        const updateFluid = () => {
            particles.forEach((particle, i) => {
                // Fluid flow simulation
                particle.x += particle.vx;
                particle.y += particle.vy;

                // Add some turbulence
                particle.vx += (Math.random() - 0.5) * 0.1;
                particle.vy += (Math.random() - 0.5) * 0.1;

                // Damping
                particle.vx *= 0.99;
                particle.vy *= 0.99;

                // Wall bouncing
                if (particle.x <= 0 || particle.x >= canvas.width) {
                    particle.vx = -particle.vx;
                    particle.x = Math.max(0, Math.min(canvas.width, particle.x));
                }
                if (particle.y <= 0 || particle.y >= canvas.height) {
                    particle.vy = -particle.vy;
                    particle.y = Math.max(0, Math.min(canvas.height, particle.y));
                }

                // Particle-particle interactions (simple)
                particles.forEach((other, j) => {
                    if (i !== j) {
                        let dx = other.x - particle.x;
                        let dy = other.y - particle.y;
                        let dist = Math.sqrt(dx*dx + dy*dy);
                        if (dist < 20 && dist > 0) {
                            let force = 0.1 / dist;
                            particle.vx -= dx * force;
                            particle.vy -= dy * force;
                        }
                    }
                });
            });
        };

        const drawFluid = () => {
            context.clearRect(0, 0, canvas.width, canvas.height);
            particles.forEach(particle => {
                let speed = Math.sqrt(particle.vx*particle.vx + particle.vy*particle.vy);
                let alpha = Math.min(0.8, speed * 0.3 + 0.3);
                context.fillStyle = `rgba(52, 211, 153, ${alpha})`;
                context.beginPath();
                context.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
                context.fill();
            });
        };

        const animate = () => {
            updateFluid();
            drawFluid();
            animationId = requestAnimationFrame(animate);
        };

        animationId = requestAnimationFrame(animate);

        return () => {
            if (animationId) cancelAnimationFrame(animationId);
        };
    }, []);

    // Expertise Section - Kinetic Gas Theory
    useEffect(() => {
        const canvas = expertiseCanvasRef.current;
        if (!canvas) return;

        const context = canvas.getContext('2d');
        let animationId;
        let gasParticles = [];

        // Initialize gas particles with different speeds
        for (let i = 0; i < 200; i++) {
            let speed = Math.random() * 4 + 0.5;
            let angle = Math.random() * Math.PI * 2;
            gasParticles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                vx: Math.cos(angle) * speed,
                vy: Math.sin(angle) * speed,
                speed: speed,
                size: Math.random() * 2 + 1
            });
        }

        const updateGas = () => {
            gasParticles.forEach(particle => {
                particle.x += particle.vx;
                particle.y += particle.vy;

                // Perfect elastic collisions with walls
                if (particle.x <= particle.size || particle.x >= canvas.width - particle.size) {
                    particle.vx = -particle.vx;
                    particle.x = Math.max(particle.size, Math.min(canvas.width - particle.size, particle.x));
                }
                if (particle.y <= particle.size || particle.y >= canvas.height - particle.size) {
                    particle.vy = -particle.vy;
                    particle.y = Math.max(particle.size, Math.min(canvas.height - particle.size, particle.y));
                }

                // Update speed for coloring
                particle.speed = Math.sqrt(particle.vx*particle.vx + particle.vy*particle.vy);
            });
        };

        const drawGas = () => {
            context.clearRect(0, 0, canvas.width, canvas.height);
            gasParticles.forEach(particle => {
                // Color based on speed (temperature)
                let r, g, b;
                if (particle.speed < 1.5) {
                    // Slow particles - blue (cold)
                    r = 100; g = 150; b = 255;
                } else if (particle.speed < 3) {
                    // Medium particles - green
                    r = 100; g = 255; b = 150;
                } else {
                    // Fast particles - red (hot)
                    r = 255; g = 150; b = 100;
                }

                context.fillStyle = `rgba(${r}, ${g}, ${b}, 0.7)`;
                context.beginPath();
                context.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
                context.fill();
            });
        };

        const animate = () => {
            updateGas();
            drawGas();
            animationId = requestAnimationFrame(animate);
        };

        animationId = requestAnimationFrame(animate);

        return () => {
            if (animationId) cancelAnimationFrame(animationId);
        };
    }, []);

    // Tools Section - Conway's Game of Life
    useEffect(() => {
        const canvas = toolsCanvasRef.current;
        if (!canvas) return;

        const context = canvas.getContext('2d');
        let animationId;
        let gameGrid = [];
        const gridSize = 40;
        let frameCount = 0;

        // Initialize Game of Life grid
        for (let i = 0; i < gridSize; i++) {
            gameGrid[i] = [];
            for (let j = 0; j < gridSize; j++) {
                gameGrid[i][j] = Math.random() < 0.3 ? 1 : 0;
            }
        }

        const countNeighbors = (grid, x, y) => {
            let count = 0;
            for (let i = -1; i <= 1; i++) {
                for (let j = -1; j <= 1; j++) {
                    if (i === 0 && j === 0) continue;
                    let nx = x + i;
                    let ny = y + j;
                    if (nx >= 0 && nx < gridSize && ny >= 0 && ny < gridSize) {
                        count += grid[nx][ny];
                    }
                }
            }
            return count;
        };

        const updateGameOfLife = () => {
            let newGrid = [];
            for (let i = 0; i < gridSize; i++) {
                newGrid[i] = [];
                for (let j = 0; j < gridSize; j++) {
                    let neighbors = countNeighbors(gameGrid, i, j);
                    if (gameGrid[i][j] === 1) {
                        // Live cell
                        newGrid[i][j] = (neighbors === 2 || neighbors === 3) ? 1 : 0;
                    } else {
                        // Dead cell
                        newGrid[i][j] = (neighbors === 3) ? 1 : 0;
                    }
                }
            }
            return newGrid;
        };

        const drawGameOfLife = () => {
            context.clearRect(0, 0, canvas.width, canvas.height);
            let cellWidth = canvas.width / gridSize;
            let cellHeight = canvas.height / gridSize;

            for (let i = 0; i < gridSize; i++) {
                for (let j = 0; j < gridSize; j++) {
                    if (gameGrid[i][j] === 1) {
                        context.fillStyle = 'rgba(148, 163, 184, 0.8)';
                        context.fillRect(i * cellWidth, j * cellHeight, cellWidth, cellHeight);
                    }
                }
            }
        };

        const animate = () => {
            frameCount++;
            if (frameCount % 10 === 0) { // Slow down the Game of Life
                gameGrid = updateGameOfLife();

                // Reset if all cells die
                let totalCells = gameGrid.flat().reduce((a, b) => a + b, 0);
                if (totalCells < 5) {
                    for (let i = 0; i < gridSize; i++) {
                        for (let j = 0; j < gridSize; j++) {
                            gameGrid[i][j] = Math.random() < 0.3 ? 1 : 0;
                        }
                    }
                }
            }
            drawGameOfLife();
            animationId = requestAnimationFrame(animate);
        };

        animationId = requestAnimationFrame(animate);

        return () => {
            if (animationId) cancelAnimationFrame(animationId);
        };
    }, []);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const styles = {
        container: {
            minHeight: '100vh',
            background: 'linear-gradient(135deg, #0f0f23 0%, #1a1a2e 25%, #16213e 50%, #0f3460 75%, #1e293b 100%)',
            fontFamily: '"Computer Modern", "Times New Roman", serif',
            color: '#e2e8f0'
        },
        header: {
            position: 'fixed',
            top: 0,
            width: '100%',
            backgroundColor: 'rgba(15, 15, 35, 0.95)',
            backdropFilter: 'blur(12px)',
            borderBottom: '1px solid rgba(102, 126, 234, 0.3)',
            zIndex: 50,
            transition: 'all 0.3s ease'
        },
        headerContent: {
            maxWidth: '1280px',
            margin: '0 auto',
            padding: '16px 24px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
        },
        logo: {
            fontSize: '24px',
            fontWeight: 'bold',
            background: 'linear-gradient(135deg, #667eea, #4facfe)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            fontFamily: '"Computer Modern", serif'
        },
        nav: {
            display: 'flex',
            gap: '32px'
        },
        navLink: {
            color: '#cbd5e1',
            textDecoration: 'none',
            fontWeight: '500',
            transition: 'color 0.3s ease',
            fontSize: '16px'
        },
        heroSection: {
            paddingTop: '128px',
            paddingBottom: '80px',
            padding: '128px 24px 80px 24px',
            position: 'relative',
            overflow: 'hidden'
        },
        section: {
            padding: '80px 24px',
            backgroundColor: 'rgba(26, 26, 46, 0.95)',
            backdropFilter: 'blur(10px)',
            position: 'relative',
            overflow: 'hidden'
        },
        sectionAlt: {
            padding: '80px 24px',
            background: 'linear-gradient(135deg, rgba(15, 15, 35, 0.95) 0%, rgba(22, 33, 62, 0.95) 100%)',
            backdropFilter: 'blur(10px)',
            position: 'relative',
            overflow: 'hidden'
        },
        animationCanvas: {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            opacity: 0.15,
            zIndex: 1
        },
        heroContainer: {
            maxWidth: '1280px',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
            gap: '48px',
            alignItems: 'center',
            position: 'relative',
            zIndex: 2
        },
        heroText: {
            transform: isVisible ? 'translateX(0) opacity(1)' : 'translateX(-40px) opacity(0)',
            transition: 'all 1s ease'
        },
        heroTitle: {
            fontSize: 'clamp(3rem, 5vw, 4rem)',
            fontWeight: 'bold',
            color: '#f1f5f9',
            marginBottom: '24px',
            lineHeight: '1.1',
            fontFamily: '"Computer Modern", serif'
        },
        heroSubtitle: {
            fontSize: '20px',
            color: '#60a5fa',
            marginBottom: '16px',
            fontWeight: '400',
            fontStyle: 'italic'
        },
        heroDescription: {
            fontSize: '18px',
            color: '#cbd5e1',
            marginBottom: '32px',
            lineHeight: '1.6'
        },
        socialLinks: {
            display: 'flex',
            flexWrap: 'wrap',
            gap: '16px'
        },
        socialLink: {
            padding: '12px',
            borderRadius: '50%',
            backgroundColor: 'rgba(15, 15, 35, 0.8)',
            boxShadow: '0 0 20px rgba(102, 126, 234, 0.3)',
            border: '1px solid rgba(102, 126, 234, 0.5)',
            color: '#cbd5e1',
            textDecoration: 'none',
            transition: 'all 0.3s ease',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        },
        heroImage: {
            transform: isVisible ? 'translateX(0) opacity(1)' : 'translateX(40px) opacity(0)',
            transition: 'all 1s ease 0.3s'
        },
        imageContainer: {
            position: 'relative'
        },
        imageBg: {
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(45deg, #667eea, #4facfe)',
            borderRadius: '16px',
            transform: 'rotate(6deg)',
            filter: 'blur(1px)'
        },
        imageWrapper: {
            position: 'relative',
            backgroundColor: 'rgba(15, 15, 35, 0.9)',
            padding: '4px',
            borderRadius: '16px',
            boxShadow: '0 0 40px rgba(102, 126, 234, 0.4)'
        },
        profileImage: {
            width: '100%',
            height: '384px',
            objectFit: 'contain',
            borderRadius: '12px'
        },
        sectionContainer: {
            maxWidth: '1280px',
            margin: '0 auto',
            position: 'relative',
            zIndex: 2
        },
        sectionHeader: {
            textAlign: 'center',
            marginBottom: '64px'
        },
        sectionTitle: {
            fontSize: '36px',
            fontWeight: 'bold',
            color: '#f1f5f9',
            marginBottom: '16px',
            fontFamily: '"Computer Modern", serif'
        },
        sectionDivider: {
            width: '96px',
            height: '4px',
            background: 'linear-gradient(135deg, #667eea, #4facfe)',
            margin: '0 auto',
            borderRadius: '2px'
        },
        grid: {
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '48px',
            alignItems: 'start'
        },
        card: {
            padding: '32px',
            borderRadius: '12px',
            border: '1px solid rgba(102, 126, 234, 0.3)',
            backdropFilter: 'blur(10px)',
            position: 'relative',
            overflow: 'hidden'
        },
        cardTitle: {
            fontSize: '20px',
            fontWeight: '600',
            color: '#f1f5f9',
            marginBottom: '16px',
            fontFamily: '"Computer Modern", serif'
        },
        cardText: {
            color: '#cbd5e1',
            lineHeight: '1.6',
            fontSize: '16px'
        },
        skillsGrid: {
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '32px'
        },
        skillCard: {
            backgroundColor: 'rgba(15, 15, 35, 0.8)',
            padding: '32px',
            borderRadius: '12px',
            boxShadow: '0 0 30px rgba(102, 126, 234, 0.2)',
            border: '1px solid rgba(102, 126, 234, 0.4)',
            transition: 'all 0.3s ease',
            position: 'relative',
            overflow: 'hidden'
        },
        skillIcon: {
            width: '56px',
            height: '56px',
            background: 'linear-gradient(135deg, #667eea, #4facfe)',
            borderRadius: '12px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '20px',
            boxShadow: '0 0 20px rgba(102, 126, 234, 0.4)'
        },
        skillTitle: {
            fontSize: '18px',
            fontWeight: '600',
            color: '#f1f5f9',
            marginBottom: '16px',
            fontFamily: '"Computer Modern", serif'
        },
        skillList: {
            listStyle: 'none',
            padding: 0,
            margin: 0
        },
        skillItem: {
            color: '#cbd5e1',
            fontSize: '14px',
            display: 'flex',
            alignItems: 'center',
            marginBottom: '10px'
        },
        skillDot: {
            width: '6px',
            height: '6px',
            background: 'linear-gradient(45deg, #667eea, #4facfe)',
            borderRadius: '50%',
            marginRight: '10px',
            boxShadow: '0 0 10px rgba(102, 126, 234, 0.6)'
        },
        contactSection: {
            padding: '80px 24px',
            backgroundColor: 'rgba(26, 26, 46, 0.95)'
        },
        contactContainer: {
            maxWidth: '1024px',
            margin: '0 auto',
            textAlign: 'center'
        },
        contactDescription: {
            fontSize: '20px',
            color: '#cbd5e1',
            marginBottom: '48px',
            lineHeight: '1.6'
        },
        contactButtons: {
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '24px'
        },
        primaryButton: {
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            background: 'linear-gradient(135deg, #667eea, #4facfe)',
            color: 'white',
            padding: '16px 32px',
            borderRadius: '50px',
            fontWeight: '600',
            textDecoration: 'none',
            transition: 'all 0.3s ease',
            boxShadow: '0 0 30px rgba(102, 126, 234, 0.4)'
        },
        secondaryButton: {
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            backgroundColor: 'rgba(15, 15, 35, 0.8)',
            color: '#cbd5e1',
            padding: '16px 32px',
            borderRadius: '50px',
            fontWeight: '600',
            border: '2px solid rgba(102, 126, 234, 0.5)',
            textDecoration: 'none',
            transition: 'all 0.3s ease'
        },
        footer: {
            backgroundColor: 'rgba(15, 15, 35, 0.98)',
            color: '#cbd5e1',
            padding: '48px 24px',
            textAlign: 'center',
            borderTop: '1px solid rgba(102, 126, 234, 0.3)'
        },
        footerText: {
            color: '#94a3b8',
            marginBottom: '16px'
        },
        footerQuote: {
            fontSize: '14px',
            color: '#64748b',
            fontStyle: 'italic'
        }
    };

    const expertise = [
        {
            category: "Programming Languages",
            items: ["Python (NumPy, SciPy, Matplotlib)", "Java", "Kotlin", "Julia", "C++"],
            icon: Code
        },
        {
            category: "Numerical Methods",
            items: ["Linear Algebra", "Monte Carlo Simulations", "Finite Element Methods", "Fast Multipole Methods"],
            icon: Cpu
        },
        {
            category: "High-Performance Computing",
            items: ["SLURM Job Scheduling", "Parallel Processing", "Linux HPC Clusters", "Distributed Computing"],
            icon: Zap
        },
    ];

    const socialLinks = [
        { name: "GitHub", url: "https://github.com/bomeisl", icon: Github, hoverColor: "#f1f5f9" },
        { name: "YouTube", url: "https://www.youtube.com/channel/UCn8_5fKGG6ElBN8_RcU5tcA", icon: Youtube, hoverColor: "#f87171" },
        { name: "Medium", url: "https://medium.com/@bomeisl", icon: MessageCircle, hoverColor: "#34d399" },
        { name: "Twitter", url: "https://x.com/bomeisl_kyle", icon: Twitter, hoverColor: "#60a5fa" }
    ];

    return (
        <div style={styles.container}>
            <style>
                {`
          @import url('https://fonts.googleapis.com/css2?family=Computer+Modern:wght@400;500;600;700&display=swap');
        `}
            </style>

            {/* Header */}
            <header style={styles.header}>
                <div style={styles.headerContent}>
                    <h1 style={styles.logo}>
                        Theoretically Possible
                    </h1>
                    <nav style={styles.nav}>
                        <a href="#about" style={styles.navLink}>About</a>
                        <a href="#expertise" style={styles.navLink}>Expertise</a>
                        <a href="#contact" style={styles.navLink}>Contact</a>
                    </nav>
                </div>
            </header>

            {/* Hero Section with Lattice Gas Animation */}
            <section style={styles.heroSection}>
                <canvas
                    ref={heroCanvasRef}
                    width={800}
                    height={600}
                    style={styles.animationCanvas}
                />

                <div style={styles.heroContainer}>
                    <div style={styles.heroText}>
                        <h2 style={styles.heroTitle}>
                            Kyle Bomeisl
                        </h2>
                        <p style={styles.heroSubtitle}>
                            Mathematical Physics & Computational Science
                        </p>
                        <p style={styles.heroDescription}>
                            I spent three years at the Pixley Condensed Matter Physics Research Group of Rutgers University
                            developing advanced numerical methods for simulating complex quantum many-body systems using cold atom
                            dynamics and implementing them on high performance computing clusters. Every background animation
                            was created by me and is a computational simulation of a real physical system (the last one is Conway's Game of Life).
                        </p>
                        <div style={styles.socialLinks}>
                            {socialLinks.map((link, index) => {
                                const IconComponent = link.icon;
                                return (
                                    <a
                                        key={index}
                                        href={link.url}
                                        style={styles.socialLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        onMouseEnter={(e) => {
                                            e.target.style.color = link.hoverColor;
                                            e.target.style.transform = 'scale(1.1)';
                                            e.target.style.boxShadow = '0 0 30px rgba(102, 126, 234, 0.6)';
                                        }}
                                        onMouseLeave={(e) => {
                                            e.target.style.color = '#cbd5e1';
                                            e.target.style.transform = 'scale(1)';
                                            e.target.style.boxShadow = '0 0 20px rgba(102, 126, 234, 0.3)';
                                        }}
                                    >
                                        <IconComponent size={20} />
                                    </a>
                                );
                            })}
                        </div>
                    </div>

                    <div style={styles.heroImage}>
                        <div style={styles.imageContainer}>
                            <div style={styles.imageBg}></div>
                            <div style={styles.imageWrapper}>
                                <img
                                    src={Kyle}
                                    alt="Kyle Bomeisl"
                                    style={styles.profileImage}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* About Section with Fluid Dynamics */}
            <section id="about" style={styles.section}>
                <canvas
                    ref={aboutCanvasRef}
                    width={800}
                    height={600}
                    style={styles.animationCanvas}
                />

                <div style={styles.sectionContainer}>
                    <div style={styles.sectionHeader}>
                        <h3 style={styles.sectionTitle}>Background & Experience</h3>
                        <div style={styles.sectionDivider}></div>
                    </div>

                    <div style={styles.grid}>
                        <div>
                            <div style={{
                                ...styles.card,
                                background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.15) 0%, rgba(79, 172, 254, 0.15) 100%)',
                                border: '1px solid rgba(102, 126, 234, 0.4)'
                            }}>
                                <h4 style={styles.cardTitle}>Awards and Honors</h4>
                                <p style={styles.cardText}>
                                    Physics | Bachelor's Degree | 2021 Rutgers University (Cum Laude)
                                </p>
                                <p style={styles.cardText}>
                                    3rd place in the 2021 TalTech International Olympiad
                                </p>
                                <p style={styles.cardText}>
                                    6th place in the 2012 North American Debate Championship
                                </p>
                            </div>

                            <div style={{
                                ...styles.card,
                                background: 'linear-gradient(135deg, rgba(52, 211, 153, 0.15) 0%, rgba(102, 126, 234, 0.15) 100%)',
                                border: '1px solid rgba(52, 211, 153, 0.4)',
                                marginTop: '24px'
                            }}>
                                <h4 style={styles.cardTitle}>Mathematical Physics</h4>
                                <p style={styles.cardText}>
                                    Extensive experience developing and implementing numerical and analytical solutions for complex
                                    physical problems. Proficient in finite difference, finite element, Monte Carlo, fast numerical methods.

                                </p>
                            </div>
                        </div>

                        <div>
                            <div style={{
                                ...styles.card,
                                background: 'linear-gradient(135deg, rgba(79, 172, 254, 0.15) 0%, rgba(30, 41, 59, 0.15) 100%)',
                                border: '1px solid rgba(79, 172, 254, 0.4)'
                            }}>
                                <h4 style={styles.cardTitle}>High-Performance Computing</h4>
                                <p style={styles.cardText}>
                                    Professional experience with HPC clusters, parallel processing frameworks, and distributed computing.
                                    Skilled in optimizing scientific programs for supercomputing environments and managing large-scale computational workflows.
                                </p>
                            </div>

                            <div style={{
                                ...styles.card,
                                background: 'linear-gradient(135deg, rgba(148, 163, 184, 0.15) 0%, rgba(100, 116, 139, 0.15) 100%)',
                                border: '1px solid rgba(148, 163, 184, 0.4)',
                                marginTop: '24px'
                            }}>
                                <h4 style={styles.cardTitle}>Research Interests</h4>
                                <p style={styles.cardText}>
                                    Cold atom dynamics, condensed matter systems, cellular automata, and computational fluid dynamics
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Skills Section with Kinetic Gas Theory */}
            <section id="expertise" style={styles.sectionAlt}>
                <canvas
                    ref={expertiseCanvasRef}
                    width={800}
                    height={600}
                    style={styles.animationCanvas}
                />

                <div style={styles.sectionContainer}>
                    <div style={styles.sectionHeader}>
                        <h3 style={styles.sectionTitle}>Technical Expertise</h3>
                        <div style={styles.sectionDivider}></div>
                    </div>

                    <div style={styles.skillsGrid}>
                        {expertise.map((skillGroup, index) => {
                            const IconComponent = skillGroup.icon;
                            return (
                                <div
                                    key={index}
                                    style={styles.skillCard}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.transform = 'translateY(-8px)';
                                        e.currentTarget.style.boxShadow = '0 0 40px rgba(102, 126, 234, 0.4)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.transform = 'translateY(0)';
                                        e.currentTarget.style.boxShadow = '0 0 30px rgba(102, 126, 234, 0.2)';
                                    }}
                                >
                                    <div style={styles.skillIcon}>
                                        <IconComponent color="white" size={28} />
                                    </div>
                                    <h4 style={styles.skillTitle}>{skillGroup.category}</h4>
                                    <ul style={styles.skillList}>
                                        {skillGroup.items.map((item, itemIndex) => (
                                            <li key={itemIndex} style={styles.skillItem}>
                                                <div style={styles.skillDot}></div>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Tools & Software with Conway's Game of Life */}
            <section style={styles.section}>
                <canvas
                    ref={toolsCanvasRef}
                    width={800}
                    height={600}
                    style={styles.animationCanvas}
                />

                <div style={styles.sectionContainer}>
                    <div style={styles.sectionHeader}>
                        <h3 style={styles.sectionTitle}>Tools & Software Development</h3>
                        <div style={styles.sectionDivider}></div>
                    </div>

                    <div style={{...styles.card, background: 'linear-gradient(135deg, rgba(15, 15, 35, 0.6) 0%, rgba(22, 33, 62, 0.6) 100%)'}}>
                        <p style={{...styles.cardText, fontSize: '16px', textAlign: 'center', margin: 0}}>
                            <strong style={{color: '#60a5fa'}}>Scientific Computing:</strong> Experience with MATLAB, Mathematica, Julia, and Python based solutions to sophisticated physical problems
                            <br/><br/>
                            <strong style={{color: '#60a5fa'}}>Software Development:</strong> Conceptualization and development of entire Web and Android apps from the ground up
                            <br/><br/>
                            <strong style={{color: '#60a5fa'}}>HPC Systems:</strong> SLURM job scheduling, Linux and Unix cluster computing, large scale computational workflow optimization
                            <br/><br/>
                            <strong style={{color: '#60a5fa'}}>Specializations:</strong> Numerical linear algebra, sparse matrix problems, engineering optimization, fast numerical methods, cold atom dynamics, condensed matter systems
                        </p>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" style={styles.contactSection}>
                <div style={styles.contactContainer}>
                    <h3 style={styles.sectionTitle}>Let's Collaborate</h3>
                    <div style={styles.sectionDivider}></div>
                    <p style={styles.contactDescription}>
                        Interested in computational physics research, numerical methods development, or high-performance computing solutions? Let's explore challenging problems in mathematical physics and scientific computing together.
                    </p>

                    <div style={styles.contactButtons}>
                        <a
                            href="mailto:bomeisl@example.com"
                            style={styles.primaryButton}
                            onMouseEnter={(e) => {
                                e.target.style.transform = 'scale(1.05)';
                                e.target.style.boxShadow = '0 0 40px rgba(102, 126, 234, 0.6)';
                            }}
                            onMouseLeave={(e) => {
                                e.target.style.transform = 'scale(1)';
                                e.target.style.boxShadow = '0 0 30px rgba(102, 126, 234, 0.4)';
                            }}
                        >
                            <Mail size={20} />
                            Get In Touch
                        </a>

                        <a
                            href="https://github.com/bomeisl"
                            style={styles.secondaryButton}
                            target="_blank"
                            rel="noopener noreferrer"
                            onMouseEnter={(e) => {
                                e.target.style.borderColor = 'rgba(102, 126, 234, 0.8)';
                                e.target.style.color = '#f1f5f9';
                                e.target.style.transform = 'scale(1.05)';
                                e.target.style.boxShadow = '0 0 30px rgba(102, 126, 234, 0.4)';
                            }}
                            onMouseLeave={(e) => {
                                e.target.style.borderColor = 'rgba(102, 126, 234, 0.5)';
                                e.target.style.color = '#cbd5e1';
                                e.target.style.transform = 'scale(1)';
                                e.target.style.boxShadow = 'none';
                            }}
                        >
                            <ExternalLink size={20} />
                            View Projects
                        </a>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer style={styles.footer}>
                <div style={styles.sectionContainer}>
                    <p style={styles.footerText}>© 2025 Kyle Bomeisl. All rights reserved.</p>
                    <p style={styles.footerQuote}>
                        "In physics, you don't have to go around making trouble for yourself. Nature does it for you." - Frank Wilczek
                    </p>
                </div>
            </footer>
        </div>
    );
};

export default PhysicsPortfolio;