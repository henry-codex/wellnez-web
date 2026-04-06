export default function WhatsAppChatButton() {
  const phone = "233240000000";
  const text = encodeURIComponent("Hi Smartsale, I would like to book an appointment.");

  return (
    <a
      href={`https://wa.me/${phone}?text=${text}`}
      target="_blank"
      rel="noreferrer"
      className="whatsapp-chat-button"
      aria-label="Chat on WhatsApp"
      title="Chat with us on WhatsApp"
    >
      <i className="fab fa-whatsapp" aria-hidden="true"></i>
      <span>Chat</span>
    </a>
  );
}
