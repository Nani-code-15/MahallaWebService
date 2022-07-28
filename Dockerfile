FROM openjdk:8
FROM maven:3.5.2-jdk-8-alpine

WORKDIR /app
ADD pom.xml /app
RUN mvn verify clean --fail-never

COPY . /app
#RUN mvn -v
#RUN mvn clean install -DskipTests
RUN mvn package
RUN ls
WORKDIR /app/target
RUN ls
#ARG JAR_FILE=Mahalla_Web_Service.jar
#COPY ${JAR_FILE} app.jar
#COPY ./target/Mahalla_Web_Service.jar app.jar
#ADD ./target/Mahalla_Web_Service.jar /developments/

EXPOSE 10040
#ENTRYPOINT ["java","-jar","/target/Mahalla_Web_Service.jar"]
ENTRYPOINT ["java","-jar","mahalla_web_service.jar"]

#Run Command
#docker build --tag=iwas-accounts-spring:latest
#docker run -d -p 9080:9080 iwas-accounts-spring:latest