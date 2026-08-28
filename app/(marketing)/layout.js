import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

export default function MarketingLayout({ children }) {
  return (
    <div className="flex min-h-full flex-1 flex-col">
      <Header />
      <main className="flex flex-1 flex-col">{children}</main>
      <Footer />
    </div>
  );
}
