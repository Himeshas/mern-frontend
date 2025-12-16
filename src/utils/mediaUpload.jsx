import { createClient } from "@supabase/supabase-js";
  const projectURL = "https://tgmvbjtstcgwtdxujmlb.supabase.co";
  const anonkey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRnbXZianRzdGNnd3RkeHVqbWxiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjU4NTMyNzgsImV4cCI6MjA4MTQyOTI3OH0.OmxJO2Lxsrl3cuy2gNfQjm6z3vjmhC9EHS8qkwF21No"

const supabase = createClient(projectURL, anonkey);
export default function uploadFile(file) {

    const promise = new Promise(
        (resolve, reject) => {
            if(file == null){
                reject();
                return;
            }

            const timeStamp = new Date().getTime();
            const fileName = timeStamp + "-" + file.name

            supabase.storage.from("Images").upload(fileName,file,{cacheControl:"3600",upsert:false}).then(()=>{
                const publicurl= supabase.storage.from("Images").getPublicUrl(fileName).data.publicUrl;
                resolve(publicurl);
            }).catch((error)=>{
                console.error("Error uploading file:", error);
                reject();
            });
        }
    );

    return promise;

}