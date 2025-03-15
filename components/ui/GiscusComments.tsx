"use client";

import Giscus from "@giscus/react";

export default function GiscusComments() {
  return (
    <div className="mt-6">
      <Giscus
        repo="byanrkh/site"
        repoId="R_kgDONsSOxA"
        category="General"
        categoryId="DIC_kwDONsSOxM4CmaAO"
        mapping="pathname"
        strict="0" // Ubah false menjadi "0"
        reactionsEnabled="1" // Ubah true menjadi "1"
        emitMetadata="0" // Ubah false menjadi "0"
        inputPosition="top"
        theme="transparent_dark"
        lang="en"
      />
    </div>
  );
}
