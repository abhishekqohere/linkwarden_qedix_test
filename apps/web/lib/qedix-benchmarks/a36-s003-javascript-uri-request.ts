type QedixRequest = {
  query: string;
};

export function qedixNavigateToJavascriptUri(
  req: QedixRequest,
  location: Location,
) {
  location.href = `javascript:${req.query}`;
}