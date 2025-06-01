import {
    AnimatedSpan,
    Terminal,
    TypingAnimation,
} from "@/components/magicui/terminal";

const Loading = () => {
  return (
    <Terminal className="min-w-[500px]">
      <TypingAnimation>&gt; initializing portfolio...</TypingAnimation>

      <AnimatedSpan delay={1500} className="text-green-500">
        <span>✔ System check completed</span>
      </AnimatedSpan>

      <AnimatedSpan delay={2000} className="text-green-500">
        <span>✔ Loading creative assets</span>
      </AnimatedSpan>

      <AnimatedSpan delay={2500} className="text-green-500">
        <span>✔ Connecting to developer profile</span>
      </AnimatedSpan>

      <AnimatedSpan delay={3000} className="text-green-500">
        <span>✔ Preparing user interface</span>
      </AnimatedSpan>

      <AnimatedSpan delay={3500} className="text-blue-500">
        <span>ℹ Launching portfolio environment</span>
      </AnimatedSpan>

      <TypingAnimation delay={4500} className="text-muted-foreground">
        Welcome to my portfolio 👋
      </TypingAnimation>

      <TypingAnimation delay={5000} className="text-muted-foreground">
        Let&apos;s build something extraordinary together.
      </TypingAnimation>
    </Terminal>
  );
};

export default Loading;
