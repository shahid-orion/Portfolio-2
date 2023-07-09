[1mdiff --git a/components/Projects.tsx b/components/Projects.tsx[m
[1mindex cf1e6bd..26e3724 100644[m
[1m--- a/components/Projects.tsx[m
[1m+++ b/components/Projects.tsx[m
[36m@@ -28,7 +28,7 @@[m [mfunction Projects({ projects }: Props) {[m
           <motion.div[m
             key={project._id}[m
             className="w-screen flex flex-col space-y-5 items-center justify-center [m
[31m-            flex-shrink-0 snap-center p-20 md:p-44 h-screen"[m
[32m+[m[32m            flex-shrink-0 snap-center p-5 md:p-44 h-screen"[m
           >[m
             <Link key={project._id} href={project.linkToBuild} target="_blank">[m
               <motion.img[m
[36m@@ -44,7 +44,7 @@[m [mfunction Projects({ projects }: Props) {[m
               />[m
             </Link>[m
 [m
[31m-            <div className="space-y-10 px-0 md:px-10 max-w-6xl">[m
[32m+[m[32m            <div className="space-y-2 md:space-y-10 px-0 md:px-10 max-w-6xl">[m
               <h4 className="text-4xl font-semibold text-center">[m
                 {/* <span className="decoration-[#178fe6]/50 underline text-[#178fe6]">[m
                   Project {i + 1} of {projects.length} :[m
[36m@@ -52,7 +52,7 @@[m [mfunction Projects({ projects }: Props) {[m
                 {project.title}[m
               </h4>[m
 [m
[31m-              <p className="text-lg text-center md:text-left">[m
[32m+[m[32m              <p className="text-lg md:text-2xl text-center md:text-left">[m
                 {project.summary}[m
               </p>[m
             </div>[m
