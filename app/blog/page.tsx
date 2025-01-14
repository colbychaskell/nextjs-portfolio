import { fetchPosts } from '../lib/data';
import { EmptyState } from '../ui/empty-state';

export default async function BlogPage() {
  const posts = await fetchPosts();

  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <h1 className="text-4xl font-bold mb-8">blog</h1>

      {posts.length === 0 ? (
        <EmptyState message="No blog posts yet">
          <p className="mt-1 text-sm text-gray-500">Check back soon!</p>
        </EmptyState>
      ) : (
        <div className="space-y-6">
          {posts.map((post) => (
            <div
              key={post.slug}
              className="p-4 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer"
            >
              <div className="flex justify-between items-start">
                <h2 className="text-xl font-medium text-gray-900">{post.title}</h2>
                <span className="text-sm text-gray-500">{post.date}</span>
              </div>
              <p className="mt-2 text-gray-600">{post.preview}</p>
              <div className="mt-4">
                <a
                  href={`/blog/${post.slug}`}
                  className="text-sm text-gray-500 hover:text-gray-900"
                >
                  Read more →
                </a>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
