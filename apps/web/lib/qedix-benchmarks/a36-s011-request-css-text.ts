type QedixRequest = {
  query: string;
};

export function qedixAssignRequestCss(
  req: QedixRequest,
  style: CSSStyleDeclaration,
) {
  style.cssText = req.query;
}