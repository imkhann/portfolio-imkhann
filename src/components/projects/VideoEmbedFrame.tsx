export type VideoPlatform = "instagram" | "youtube" | "drive" | "other";

export type VideoEmbedFrameProps = {
  platform: VideoPlatform;
  src: string;
  title: string;
  ratioClass?: string;
  maxWidthClass?: string;
  allow?: string;
  allowFullScreen?: boolean;
};

export default function VideoEmbedFrame({
  platform, // sekarang wajib, biar jelas ini embed apa
  src,
  title,
  ratioClass = "aspect-video",
  maxWidthClass = "max-w-3xl",
  allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
  allowFullScreen = true,
}: VideoEmbedFrameProps) {
  // kalau suatu hari kamu mau beda-bein behavior per platform,
  // tinggal pakai switch(platform) di sini

  return (
    <div
      className={`relative w-full ${maxWidthClass} mx-auto ${ratioClass} overflow-hidden rounded-md border border-[var(--line)]`}
    >
      <iframe
        loading="lazy"
        className="absolute inset-0 h-full w-full"
        src={src}
        title={title}
        allow={allow}
        referrerPolicy="strict-origin-when-cross-origin"
        {...(allowFullScreen ? { allowFullScreen: true } : {})}
      />
    </div>
  );
}
