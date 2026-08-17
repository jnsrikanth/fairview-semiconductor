# AGENTS.md — Mandatory AI Agent Rules & Operational Constraints

## 1. MANDATORY CONTENT & COPY APPROVAL PROTOCOL (HIGHEST PRIORITY)

> [!CAUTION]
> **CRITICAL RULE**: The AI agent is STRICTLY FORBIDDEN from publishing, deploying, or committing any written English copy, marketing phrases, headlines, product descriptions, slogans, or text content without the explicit, prior review and written approval of the Product Manager.

### Protocol Requirements:
1. **Zero Unapproved Text Generation**:
   - Do NOT invent, assume, or insert marketing slogans, headlines, taglines, or body copy into the codebase.
   - All text content must be provided directly by the Product Manager or explicitly reviewed and approved in advance.
2. **Review-First Workflow for Copy**:
   - Whenever copy or text content needs to be drafted, updated, or modified, the agent must present the exact proposed text in a clear review format in the chat.
   - The agent MUST wait for the Product Manager's explicit sign-off before modifying any source files or triggering any deployment.
3. **No Automatic Deployments with Modified Copy**:
   - The agent must not trigger live deployments (`git push`, `vercel --prod`) containing copy changes unless the user has reviewed and signed off on the exact wording.
4. **Scope of the Rule**:
   - Applies to all user-facing web pages, metadata, headers, footers, card descriptions, marketing copy, and documentation.
