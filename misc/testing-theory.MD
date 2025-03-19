# Testing

### Unit Testing

- **Cost**: Cheap, easy.
- **Use**: Good for testing your own functions.

### Component Testing

- **Cost**: Medium.
- **Use**: Provides good coverage for individual components.

### E2E (End-to-End) Tests

- **Cost**: Can be expensive.
- **Use**: Useful for showing if anything breaks in the complete cycle. Gives confidence in the system as a whole.
- **Downside**: Can be slow to run.

### Stress Testing

- **Use**: Determines how far you can push an application.
- **Focus**: Concurrency, interaction with other components, and identifying bottlenecks.

### Testing Strategy

- Focus on the most important aspects for your context.
- Prioritize **happy paths** first, then tackle **unhappy paths** later.

---

### General Testing Advice

- Test your own code, not code that will be tested by others (if you're using reliable pre-made libraries).
- **TypeScript** is the industry standard, so learn it.
