export default function sitemap() {
  const baseUrl = "https://apturatechsolutions.tech";

  const routes = [
    { path: "", priority: 1.0, changeFrequency: "weekly" },
    { path: "/about", priority: 0.9, changeFrequency: "monthly" },
    { path: "/contact", priority: 0.9, changeFrequency: "monthly" },
    { path: "/clients", priority: 0.8, changeFrequency: "monthly" },
    { path: "/team", priority: 0.8, changeFrequency: "monthly" },
    { path: "/methodology", priority: 0.7, changeFrequency: "monthly" },
    { path: "/vision", priority: 0.7, changeFrequency: "monthly" },
    { path: "/development", priority: 0.7, changeFrequency: "monthly" },
    { path: "/launch", priority: 0.7, changeFrequency: "monthly" },
    { path: "/news", priority: 0.6, changeFrequency: "weekly" },
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified: new Date().toISOString(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
