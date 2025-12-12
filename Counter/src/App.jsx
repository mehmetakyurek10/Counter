import { useState, useEffect } from "react";
import "./style.css";

export default function App() {
  const [count, setCount] = useState(() => {
    const kayitliSayi = localStorage.getItem("SayacDegeri");
    if (kayitliSayi !== null) {
      return Number(kayitliSayi);
    }
    return 0;
  });
  const [history, setHistory] = useState([]);

  const [isBlocked, setIsBlocked] = useState(false);
  const [timeLeft, setTimeLeft] = useState(0);

  const playClickSound = () => {
    const audio = new Audio(
      "https://actions.google.com/sounds/v1/ui/click_on_on.ogg"
    );
    audio.volume = 0.5;
    audio
      .play()
      .catch((e) =>
        console.log("Click sesi oynatma hatası (tarayıcı engeli)", e)
      );
  };

  const playAlertSound = () => {
    const audio = new Audio(
      "https://actions.google.com/sounds/v1/alarms/beep_short.ogg"
    );
    audio.volume = 0.2;
    audio.play().catch((e) => console.log("Uyarı sesi oynatma hatası", e));
  };

  function handleIncrease() {
    playClickSound();
    const yeniDeger = count + 1;
    setCount(yeniDeger);
    setHistory((prevHistory) => {
      const yeniListe = [...prevHistory, `Arttırıldı (+): ${yeniDeger}`];
      return yeniListe.slice(-3);
    });
  }

  function handleDecrease() {
    if (count > 0) {
      playClickSound();
      const yeniDeger = count - 1;
      setCount(yeniDeger);

      setHistory((prevHistory) => {
        const yeniListe = [...prevHistory, `Azaltıldı (-): ${yeniDeger}`];
        return yeniListe.slice(-3);
      });
    }
  }

  function handleReset() {
    setCount(0);
    setIsBlocked(false);
    setTimeLeft(0);

    setHistory((prevHistory) => {
      return [...prevHistory, "Sayaç Sıfırlandı"].slice(-3);
    });
  }

  useEffect(() => {
    document.title = `Sayaç: ${count}`;
    localStorage.setItem("SayacDegeri", count);

    if (count > 0 && count % 7 === 0) {
      setIsBlocked(true);
      setTimeLeft(5);
      playAlertSound();
    }
  }, [count]);

  useEffect(() => {
    if (isBlocked && timeLeft > 0) {
      const timer = setTimeout(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0) {
      setIsBlocked(false);
    }
  }, [isBlocked, timeLeft]);

  return (
    <div className="plus-minus-result-div">
      <div className="btn-group">
        <button
          onClick={handleIncrease}
          style={isBlocked ? { opacity: 0.5, cursor: "not-allowed" } : {}}
          disabled={isBlocked}
        >
          Arttır
        </button>
        <button
          onClick={handleDecrease}
          disabled={count === 0 || isBlocked}
          style={isBlocked ? { opacity: 0.5, cursor: "not-allowed" } : {}}
        >
          Azalt
        </button>
      </div>

      <p style={{ color: count === 0 ? "orangered" : "lightgreen" }}>{count}</p>

      {isBlocked && (
        <p>
          ⚠️ 7'nin katlarına ulaştınız {timeLeft} saniye beklemeniz gerekiyor!
        </p>
      )}

      <button className="btn-reset" onClick={handleReset}>
        Sıfırla
      </button>
      {history.length > 0 && (
        <div style={{ marginTop: "20px", width: "100%", maxWidth: "300px" }}>
          <hr style={{ borderColor: "#777", marginBottom: "10px" }} />
          <h4 style={{ color: "white", marginBottom: "10px" }}>Son İşlemler</h4>
          <ul style={{ listStyleType: "none", padding: 0, color: "#ccc" }}>
            {history.map((item, index) => (
              <li
                key={index}
                style={{
                  borderBottom: "1px solid #444",
                  padding: "5px",
                  fontSize: "14px",
                  opacity: (index + 1) / 3,
                }}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
