import openai

openai.api_key = 'YOUR_OPENAI_API_KEY'

def summarize_text(text):
    prompt = f"Summarize this transaction context clearly and briefly:\n\n{text}"
    response = openai.ChatCompletion.create(
        model="gpt-4",
        messages=[{"role": "user", "content": prompt}],
        max_tokens=100,
        temperature=0.7
    )
    summary = response['choices'][0]['message']['content'].strip()
    return summary

if __name__ == "__main__":
    sample_text = "Bought 0.01 BTC for monthly subscription renewal for service X."
    print("Summary:", summarize_text(sample_text))
