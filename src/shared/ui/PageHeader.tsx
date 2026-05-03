type PageHeaderProps = {
  title: string;
  description?: string;
};

export function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <section className="border-b bg-white">
      <div className="mx-auto w-full max-w-[1610px] px-6 py-16 md:px-10 md:py-20">
        <h1 className="mb-0 text-[40px] font-extrabold leading-tight tracking-normal md:text-[54px]">{title}</h1>
        {description ? <p className="mt-4 max-w-3xl text-lg leading-8 text-muted-foreground">{description}</p> : null}
      </div>
    </section>
  );
}
