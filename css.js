const addCSS = () => {
  var style = document.createElement("style");

  style.textContent = `
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: Poppins, sans-serif;
            color: #333;
        }

        body {
            background-color: #f2f2f2;
            scroll-behavior: smooth;
        }

        .navbar {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 1rem;
            background-color: transparent;
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            z-index: 999;
            backdrop-filter: blur(10px);
            -webkit-backdrop-filter: blur(10px);
        }

        .navbar a {
            text-decoration: none;
            font-weight: 600;
            font-size: 1.2rem;
            color: #000;
            margin-right: 1rem;
        }

        .navbar-links {
            list-style: none;
            display: flex;
        }

        .navbar-links li {
            margin-right: 1rem;
        }

        .navbar-links li a {
            text-decoration: none;
        }

        .navbar-links li a:hover {
            text-decoration: underline;
        }

        header {
            width: 100%;
            height: 100vh;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-align: center;
            background-image: url('https://mir-s3-cdn-cf.behance.net/project_modules/hd/f37a02184722939.6556dbe8b949e.jpg');
            background-size: cover;
        }

        header h1,
        header p {
            color: white;
            text-shadow: 2px 2px 4px #000000;
        }

        header h1 {
            font-size: 4rem;
            margin-bottom: 1rem;
        }

        header p {
            font-size: 1.5rem;
            font-weight: 500;
        }

        .main-content {
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 2rem;
        }

        .about-me {
            margin-bottom: 2rem;
            width: 50%;
        }

        .about-me h2 {
            font-size: 2rem;
            margin-bottom: 1rem;
        }

        .about-me p {
            font-size: 1.2rem;
            line-height: 1.5;
        }

        .gallery {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            grid-gap: 1rem;
            margin-bottom: 2rem;
        }

        .gallery h2 {
            font-size: 2rem;
            margin-bottom: 1rem;
        }

        .gallery img {
            width: 100%;
            height: auto;
        }

        footer {
            text-align: center;
            padding: 1rem;
            background-color: #c0c0c0;
            color: #000;
            font-size: 0.8rem;
        }
    `;

  document.head.appendChild(style);
};

addCSS();
