type QedixRequest = {
  body: string;
};

export function QedixDangerousHtml({
  req,
}: {
  req: QedixRequest;
}) {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: req.body,
      }}
    />
  );
}