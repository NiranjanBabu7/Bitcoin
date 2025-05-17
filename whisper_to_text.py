import openai
import sys

openai.api_key = 'YOUR_OPENAI_API_KEY'

def transcribe_audio(file_path):
    audio_file = open(file_path, "rb")
    transcript = openai.Audio.transcribe("whisper-1", audio_file)
    return transcript['text']

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Usage: python whisper_to_text.py path_to_audio_file")
        sys.exit(1)
    file_path = sys.argv[1]
    text = transcribe_audio(file_path)
    print("Transcribed Text:", text)
