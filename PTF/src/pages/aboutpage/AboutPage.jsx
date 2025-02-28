function AboutPage() {
    return (
        <div className="p-6 bg-gray-100 min-h-screen flex flex-col items-center">
            <h1 className="text-4xl font-bold mb-6">About Page</h1>
            <p className="mb-4 text-lg text-center">I made this page to make you able to know who I am as a developer and I will show you my projects.</p>
            <p className="mb-8 text-lg text-center">Feel free to check my projects down below.</p>
            <a 
                href="https://www.linkedin.com/in/ahmad-al-hamad-b25089256/"
                className="mb-8 text-lg text-center text-blue-600 hover:underline"
            >
                Linkedin
            </a>
        </div>
    );
}

export default AboutPage;