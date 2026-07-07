"use client";

import SearchUserCard from "./SearchUserCard";
import SearchActivityCard from "./SearchActivityCard";

export default function SearchResults({
  users,
  posts,
  projects,
  onSelectActivity,
}) {
  const isEmpty =
    users.length === 0 &&
    posts.length === 0 &&
    projects.length === 0;

  if (isEmpty) {
    return (
      <div className="text-center text-gray-500 mt-16">
        No results found
      </div>
    );
  }

  return (
    <div className="space-y-8">

      {/* PEOPLE */}
      {users.length > 0 && (
        <section>
          <h2 className="text-lg font-bold mb-3">
            People
          </h2>

          <div className="space-y-2">
            {users.map((user) => (
              <SearchUserCard
                key={user.id}
                user={user}
              />
            ))}
          </div>
        </section>
      )}

      {/* POSTS */}
      {posts.length > 0 && (
        <section>
          <h2 className="text-lg font-bold mb-3">
            Posts
          </h2>

          <div className="space-y-2">
            {posts.map((post) => (
              <SearchActivityCard
                key={post.id}
                activity={post}
                onSelect={onSelectActivity}
              />
            ))}
          </div>
        </section>
      )}

      {/* PROJECTS */}
      {projects.length > 0 && (
        <section>
          <h2 className="text-lg font-bold mb-3">
            Projects
          </h2>

          <div className="space-y-2">
            {projects.map((project) => (
              <SearchActivityCard
                key={project.id}
                activity={project}
                onSelect={onSelectActivity}
              />
            ))}
          </div>
        </section>
      )}

    </div>
  );
}