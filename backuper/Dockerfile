FROM python:3

WORKDIR /usr/src/app

#COPY server.py /usr/src/app/

# Install AWS CLI
RUN pip install awscli --upgrade --user


#RUN pip install http

# Adding AWS CLI Executable to Path
#RUN echo 'export PATH=~/.local/bin:$PATH'>>root/.bashrc

# Install groff to enable AWS CLI command line help
RUN apt-get update \
    && apt-get --assume-yes install groff


CMD [ "python", "server.py", "80"]