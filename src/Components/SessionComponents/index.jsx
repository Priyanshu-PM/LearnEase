function Card(props) {
    const { variant, extra, children, ...rest } = props;
    return (
      <div
        className={`!z-5 relative flex flex-col rounded-[20px] bg-white bg-clip- shadow-3xl drop-shadow-sm  transition-all hover:drop-shadow-xl dark:!bg-navy-800 dark:text-white dark:shadow-none ${extra}`}
        {...rest}
      >
        {children}
      </div>
    );
  }
  
  export default Card;
  