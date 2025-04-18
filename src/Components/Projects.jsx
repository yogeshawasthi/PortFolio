import React, { useEffect, useState } from "react";
import axios from "axios";
import GitHubCalendar from "react-github-calendar";

const Projects = () => {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.github.com/users/yogeshawasthi/repos")
      .then((res) => setRepos(res.data))
      .catch((err) => console.error("Error fetching repos:", err));
  }, []);

  return (
    <section
      id="projects"
      className="py-20 px-6 bg-white dark:bg-slate-900 text-gray-900 dark:text-white"
    >
      <div className="max-w-6xl mx-auto text-center space-y-10">
        <h2 className="text-4xl font-bold">Projects</h2>
        <p className="text-gray-500 dark:text-gray-400 text-lg">
          Here are some of my GitHub repositories.
        </p>

        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {repos.slice(0, 6).map((repo) => (
            <div
              key={repo.id}
              className="bg-gray-100 dark:bg-slate-800 p-6 rounded-2xl shadow hover:shadow-lg transition"
              data-aos="fade-up"
            >
              <h3 className="text-xl font-semibold mb-2">{repo.name}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                {repo.description || "No description provided."}
              </p>
              <a
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-500 hover:underline"
              >
                View Code →
              </a>
            </div>
          ))}
        </div>

        {/* GitHub Contributions Graph */}
        <div className="mt-16">
          <h3 className="text-3xl font-semibold mb-4">GitHub Contributions</h3>
          <div className="flex justify-center">
            <GitHubCalendar
              username="yogeshawasthi"
              colorScheme="dark"
              blockSize={15}
              blockMargin={5}
              fontSize={14}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
