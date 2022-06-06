const ConditionalCardActionArea = ({
  condition,
  jumpLink,
  external,
  internalLocal,
  internalGlobal,
  children,
}) => {
  switch (condition) {
    case 'jumpLink':
      return jumpLink(children);
    case 'externalLink':
      return external(children);
    case 'internalGlobal':
      return internalGlobal(children);
    case 'internalLocal':
      return internalLocal(children);
    default:
      return children;
  }
};

export default ConditionalCardActionArea;
