FROM python:3.11-slim

# Set the working directory
WORKDIR /app

# Copy Pipfile and Pipfile.lock to install dependencies
COPY Pipfile Pipfile.lock /app/

# Install system dependencies required for Chrome and ChromeDriver
RUN apt-get update && apt-get install -y wget gnupg2 \
    && wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add - \
    && sh -c 'echo "deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google.list' \
    && apt-get update \
    && apt-get install -y google-chrome-stable \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

# Install ChromeDriver
RUN apt-get update \
    && apt-get install -yqq unzip \
    && wget -O /tmp/chromedriver.zip http://chromedriver.storage.googleapis.com/`curl -sS chromedriver.storage.googleapis.com/LATEST_RELEASE`/chromedriver_linux64.zip \
    && unzip /tmp/chromedriver.zip chromedriver -d /usr/local/bin/ \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

# Install Pipenv and project dependencies
RUN pip install pipenv
RUN pipenv install --deploy --ignore-pipfile

# Copy the rest of the application
COPY . /app

# Expose the port the app runs on
EXPOSE 5000

# Set display port to avoid crash
ENV DISPLAY=:99

# Run the Flask application
CMD ["pipenv", "run", "python", "app/routes.py"]
