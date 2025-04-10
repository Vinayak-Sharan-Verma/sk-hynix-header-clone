
import { NewsroomHeader } from "../components/NewsroomHeader";
import Footer from "../components/Footer/Footer";

const Index = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <NewsroomHeader />
      <main className="flex-1 bg-white">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Welcome to SK hynix Newsroom
                </h2>
                <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Discover the latest news and innovations from SK hynix
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
