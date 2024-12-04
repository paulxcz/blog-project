import { Link } from "react-router-dom";
import MainCategories from "../components/MainCategories";
import FeaturedPosts from "../components/FeaturedPosts";
import PostList from "../components/PostList";

const Homepage = () => {
  return (
    <div className="mt-8 px-4 md:px-12 lg:px-24 flex flex-col gap-8">
      {/* BREADCRUMB */}
      <nav className="flex gap-2 text-sm text-gray-500">
        <Link to="/" aria-label="Go to Home Page">
          Home
        </Link>
        <span>›</span>
        <span className="text-blue-600">Publications</span>
      </nav>

      {/* INTRODUCTION */}
      <header className="flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex-1">
          <h1 className="text-gray-800 text-3xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
            Share Your Stories with the World
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-600">
            Join our community of storytellers and creators. Write, publish, and
            connect with an audience who values your voice.
          </p>
        </div>
        {/* Animated Button */}
        <Link
          to="write"
          aria-label="Start writing your story"
          className="hidden md:block relative"
        >
          <svg
            viewBox="0 0 200 200"
            width="200"
            height="200"
            className="text-lg tracking-widest"
          >
            <path
              id="circlePath"
              fill="none"
              d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
            />
            <text className="text-gray-500">
              <textPath href="#circlePath" startOffset="0%">
                Start writing •
              </textPath>
              <textPath href="#circlePath" startOffset="50%">
                Express yourself •
              </textPath>
            </text>
          </svg>
          <button className="absolute top-0 left-0 right-0 bottom-0 m-auto w-20 h-20 bg-blue-600 hover:bg-blue-800 transition-colors rounded-full flex items-center justify-center shadow-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="36"
              height="36"
              fill="none"
              stroke="white"
              strokeWidth="2"
            >
              <line x1="6" y1="18" x2="18" y2="6" />
              <polyline points="9 6 18 6 18 15" />
            </svg>
          </button>
        </Link>
      </header>

      {/* CATEGORIES */}
      <section>
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Explore Categories
        </h2>
        <MainCategories />
      </section>

      {/* FEATURED POSTS */}
      <section>
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Featured Stories
        </h2>
        <FeaturedPosts />
      </section>

      {/* POST LIST */}
      <section>
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Recent Posts</h2>
        <PostList />
      </section>
    </div>
  );
};

export default Homepage;
