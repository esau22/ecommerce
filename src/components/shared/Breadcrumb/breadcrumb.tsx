interface BreadcrumbProps {
  pageName: string;
}

const Breadcrumb = ({ pageName }: BreadcrumbProps) => {
  return (
    <div className="mb-1 flex flex-col sm:flex-row sm:items-center sm:justify-between">
      <h2 className="text-[24px] font-bold leading-[30px] text-dark dark:text-white">
        {pageName}
      </h2>
    </div>
  );
};

export default Breadcrumb;
