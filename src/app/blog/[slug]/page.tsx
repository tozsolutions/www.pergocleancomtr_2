import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import { blogs } from "@/lib/blogs";
import { FAQSchema } from "@/components/seo/StructuredData";

interface Props { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  return blogs.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogs.find(p => p.slug === slug);
  if (!post) return {};
  return {
    title: post.metaTitle,
    description: post.metaDescription,
    keywords: post.keywords.join(", "),
    openGraph: { 
      title: post.title, 
      description: post.excerpt, 
      type: "article", 
      publishedTime: post.date,
      images: [{ url: `https://www.pergoclean.com.tr${post.image}`, width: 1200, height: 630 }]
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: [`https://www.pergoclean.com.tr${post.image}`],
    },
  };
}

function blogPostingJsonLd(post: any, slug: string) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: { "@type": "Person", name: post.author },
    publisher: { 
      "@type": "Organization", 
      name: "PergoClean", 
      logo: { "@type": "ImageObject", url: "https://www.pergoclean.com.tr/assets/logo.png" } 
    },
    url: `https://www.pergoclean.com.tr/blog/${slug}`,
    image: post.image,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogs.find(p => p.slug === slug);
  if (!post) notFound();

  const jsonLd = blogPostingJsonLd(post, slug);

  return (
    <article className="container mx-auto px-4 py-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      {post.faqs && post.faqs.length > 0 && <FAQSchema faqs={post.faqs} />}
      
      <div className="mx-auto max-w-3xl">
        <div className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--aqua)]">{post.category}</div>
        <h1 className="mt-3 text-balance text-4xl font-bold md:text-5xl">{post.title}</h1>
        <div className="mt-4 flex items-center gap-4 text-sm text-muted-foreground">
          <span>{post.date}</span>
          <span>·</span>
          <span>{post.author}</span>
        </div>
        <div className="mt-8 aspect-[16/9] relative overflow-hidden rounded-3xl border border-border bg-card">
          <Image src={post.image} alt={post.title} fill className="object-cover" />
        </div>
        
        <div className="mt-10 prose prose-invert prose-pergoclean max-w-none">
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </div>

        {post.faqs && post.faqs.length > 0 && (
          <div className="mt-16 border-t border-border pt-10">
            <h2 className="text-2xl font-bold">Sıkça Sorulan Sorular</h2>
            <div className="mt-6 space-y-6">
              {post.faqs.map((faq, i) => (
                <div key={i} className="rounded-2xl border border-border bg-card p-6">
                  <h3 className="font-semibold text-[var(--aqua)]">{faq.q}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="mt-16 text-center">
          <a href="/#fiyat" className="inline-flex items-center gap-2 rounded-full bg-aqua-grad px-8 py-4 text-sm font-semibold text-white shadow-glow transition hover:scale-105">
            Ücretsiz Keşif ve Teknik Analiz Al
          </a>
        </div>
      </div>
    </article>
  );
}
