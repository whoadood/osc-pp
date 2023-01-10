import { useEffect, useState } from "preact/hooks";
export default function Version() {
  const [version, setVersion] = useState(localStorage.getItem("version") ?? "");

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(
          "https://api.github.com/repos/OpenStickCommunity/GP2040-CE/releases/latest"
        );
        const data = await res.json();
        // console.log("data", data);
        setVersion(data.tag_name);
      } catch (err) {
        console.log(err);
      } finally {
        localStorage.setItem("version", version);
      }
    })();
  }, []);

  return (
    <span className="text-transparent bg-clip-text bg-gradient-to-br from-cyan-500 via-teal-500 to-indigo-600">
      {version}
    </span>
  );
}
